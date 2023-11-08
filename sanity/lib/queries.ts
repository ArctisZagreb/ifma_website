// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";
import { client } from "./client";
import { SanityDocument } from "sanity";

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
