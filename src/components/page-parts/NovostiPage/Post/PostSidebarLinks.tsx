import React from "react";
import { getCategories, getPosts } from "../../../../../sanity/lib/queries";
import ArticleListItem from "@/components/article/ArticleListItem";
import Link from "next/link";

const PostSidebarLinks = async () => {
  const zadnjeObjave = await getPosts(5, "all");
  const postCategories = await getCategories();

  return (
    <div className=" w-full lg:max-w-[300px]">
      <div className="mb-[40px]">
        <p className="uppercase border-b-[1px] border-base-content mb-[20px] pb-[5px]">
          nove objave
        </p>
        <ul>
          {zadnjeObjave.map((objava: any) => {
            const textObjave = objava.title;
            const linkPath = `/novosti/${objava.slug.current}`;
            return (
              <ArticleListItem key={objava._id}>
                <Link href={linkPath} className="article-text-link">
                  {textObjave}
                </Link>
              </ArticleListItem>
            );
          })}
        </ul>
      </div>
      <div className="mb-[40px]">
        <p className="uppercase border-b-[1px] border-base-content mb-[20px] pb-[5px]">
          kategorije
        </p>
        <ul>
          {postCategories.map((cat: any) => {
            const textCat = cat.title;
            const linkPath = `/novosti?category=${cat.slug.current}`;
            return (
              <ArticleListItem key={textCat}>
                <Link href={linkPath} className="article-text-link">
                  {textCat}
                </Link>
              </ArticleListItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostSidebarLinks;
