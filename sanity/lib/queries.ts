// ./nextjs-app/sanity/lib/queries.ts
import * as EmailValidator from "email-validator";
import { groq } from "next-sanity";
import { client, writeClient } from "./client";
import { SanityDocument } from "sanity";
import { TSponsorsType } from "@/types/types";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug,mainImage,previewText,publishedAt,categories[]->{title,slug}
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body,publishedAt
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

//get posts , order by publishedAt TODO:add option to filter by category and asc or desc
export const getPosts = async (
  numberOfPosts: number | "all"
): Promise<SanityDocument[]> => {
  let groq = `*[_type == "post" && defined(slug.current)]{
    _id, title, slug,mainImage,previewText,publishedAt,categories[]->{title,slug}
  }`;
  if (numberOfPosts !== "all") {
    groq += `[0...${numberOfPosts}]`;
  }

  //in groq options are asc or desc
  groq += ` | order(publishedAt desc)`;
  return client.fetch(
    groq,
    {},
    {
      next: {
        revalidate: 120,
      },
    }
  );
};

export const getBanner = async () => {
  const groq = `*[_type=='banner']{
    _id,title,background,color,items
  }[0]`;

  return client.fetch(groq, {}, { next: { revalidate: 30 } });
};

/* Sponsors */

export const getSponsors = async (sponsorCategory: TSponsorsType) => {
  const filterByCategory = sponsorCategory === "all" ? false : true;
  let groq = `*[_type=='sponsors' ${
    filterByCategory ? " && _id == '" + sponsorCategory + "'" : ""
  }]{
    _id,items
  }`;
  return client.fetch(groq, {}, { next: { revalidate: 30 } });
};

/* Newsletter */

export const postNewsletterEmail = async (
  email: string
): Promise<{ success: boolean; msg: string }> => {
  //email validation
  const validEmail = EmailValidator.validate(email);
  if (!validEmail) {
    return {
      success: false,
      msg: "Email not valid",
    };
  }
  const groq = `*[_type=='newsletterEmailList' && emailAddress== '${email}']`;
  //check if email alredy exist in db
  try {
    const existingList = await client.fetch(groq, {});
    console.log(existingList);
    if (existingList.length !== 0) {
      return {
        success: false,
        msg: "Email alredy existing in newsletter list",
      };
    }
  } catch (error) {
    return {
      success: false,
      msg: "Something went wrong",
    };
  }

  //posting to db
  try {
    await writeClient.create({
      _type: "newsletterEmailList",
      emailAddress: email,
    });
    return {
      success: true,
      msg: "Email added 🙂",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      msg: "Something went wrong,please try again.",
    };
  }
};

/* Members */

export const getBoardMembersShowcase = async () => {
  let groq = `*[_type=='boardMembersShowcase' && _id=='showcase' ]{
    showcaseList[]->{name,surname,slug,image,role->{title},_id}
  }[0]`;

  return client.fetch(groq, {}, { next: { revalidate: 120 } });
};
