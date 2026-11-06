// ./nextjs-app/sanity/lib/queries.ts
import { groq } from "next-sanity";
import { client } from "./client";
import { SanityDocument } from "sanity";
import { TSponsorsType } from "@/types/types";

/*
 * Cache strategija (smanjuje Vercel ISR / Data Cache writes):
 * - Svaki fetch ima tag = Sanity _type dokumenta koji koristi.
 * - Sanity webhook -> /api/revalidate poziva revalidateTag(_type) cim se sadrzaj promijeni.
 * - Vremenska revalidacija je samo sigurnosna mreza (24h), umjesto prijasnjih 120s
 *   koji su (preko Footera/Newslettera) tjerali SVAKU stranicu na regeneraciju svake 2 min.
 */
export const REVALIDATE_FALLBACK = 60 * 60 * 24;

const cacheOptions = (tags: string[]) => ({
  next: { revalidate: REVALIDATE_FALLBACK, tags },
});

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug,mainImage,previewText,publishedAt,categories[]->{title,slug}
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body,publishedAt,slug,categories[]->{slug,title}
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

//get post categories
export const getCategories = async () => {
  const groq = `*[_type=='category']{slug,title}`;

  return client.fetch(groq, {}, cacheOptions(["category"]));
};

//get posts , order by publishedAt TODO:add option to filter by category and asc or desc
export const getPosts = async (
  numberOfPosts: number | "all",
  typeOfPosts?: string
): Promise<SanityDocument[]> => {
  let postCategory = "";
  if (typeOfPosts) {
    postCategory = [
      "globalne-vijesti",
      "lokalne-vijesti",
      "eu-vijesti",
    ].includes(typeOfPosts)
      ? typeOfPosts
      : "all";
  }
  let groq = `*[_type == "post" ${
    postCategory !== "all"
      ? ` && count((categories[]->slug.current)[@ in ["${typeOfPosts}"]]) > 0`
      : ""
  }]{
    _id, title, slug,mainImage,previewText,publishedAt,categories[]->{title,slug},body,author->{name,slug,_id}
  }`;
  if (numberOfPosts !== "all") {
    groq += `[0...${numberOfPosts}]`;
  }

  //in groq options are asc or desc
  groq += ` | order(publishedAt desc)`;
  return client.fetch(groq, {}, cacheOptions(["post", "category", "author"]));
};

export const getBanner = async () => {
  const groq = `*[_type=='banner']{
    _id,title,background,color,items
  }[0]`;

  return client.fetch(groq, {}, cacheOptions(["banner"]));
};

/* Sponsors */

export const getSponsors = async (sponsorCategory: TSponsorsType) => {
  const filterByCategory = sponsorCategory === "all" ? false : true;
  let groq = `*[_type=='sponsors' ${
    filterByCategory ? " && _id == '" + sponsorCategory + "'" : ""
  }]{
    _id,items
  }`;
  return client.fetch(groq, {}, cacheOptions(["sponsors", "sponsor"]));
};

/* Members */

export const getBoardMembersShowcase = async () => {
  let groq = `*[_type=='boardMembersShowcase' && _id=='showcase' ]{
    showcaseList[]->{name,surname,slug,image,role->{title},_id}
  }[0]`;

  return client.fetch(
    groq,
    {},
    cacheOptions(["boardMembersShowcase", "members", "memberRole"])
  );
};

/* Newsletter Banner */

export const getNewsletterBanner = async () => {
  const groq = `*[_type=="newsletterBanner" && _id=="newsletter-banner"][0]`;

  return client.fetch(groq, {}, cacheOptions(["newsletterBanner"]));
};
