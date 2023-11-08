import { SanityDocument } from "next-sanity";
import React from "react";
import { sanityFetch } from "../../../../../sanity/lib/sanityFetch";
import { getPosts, postsQuery } from "../../../../../sanity/lib/queries";
import { urlForImage } from "../../../../../sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/cards/NewsCard/NewsCard";
export const LatestNews = async () => {
  /*  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery }); */
  const posts = await getPosts(3);

  console.log(posts[0]);
  return (
    <div className="flex flex-col items-center gap-[25px]">
      <h2 className=" text-headingMMobile lg:text-headingM">Novosti</h2>
      <span className="small-divider"></span>
      <div className="w-full flex flex-col max-lg:items-center lg:flex-row justify-between gap-[20px]">
        {posts.map((post) => {
          return <NewsCard cardData={post} key={post._id} />;
        })}
      </div>
      <button>Pogledaj sve novosti</button>
    </div>
  );
};
