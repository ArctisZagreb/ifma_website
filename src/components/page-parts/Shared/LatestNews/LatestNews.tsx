import React from "react";

import { getPosts } from "../../../../../sanity/lib/queries";

import NewsCard from "@/components/cards/NewsCard/NewsCard";
import Button from "@/components/UI/Button";
export const LatestNews = async () => {
  /*  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery }); */
  const posts = await getPosts(3, "all");

  return (
    <div className="flex flex-col items-center gap-[25px]">
      <h2 className=" text-headingMMobile lg:text-headingM">Novosti</h2>
      <span className="small-divider"></span>
      <div className="w-full flex flex-col max-lg:items-center lg:flex-row justify-between gap-[20px]">
        {posts.map((post) => {
          return <NewsCard cardData={post} key={post._id} />;
        })}
      </div>
      <Button type="neutral" path="/novosti">
        Pogledaj sve novosti
      </Button>
    </div>
  );
};
