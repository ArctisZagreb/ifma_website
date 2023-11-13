import React from "react";
import { SanityDocument } from "@sanity/client";
import { IPostCategory } from "@/types/types";
import Link from "next/link";
import format from "date-fns/format";
import { formatISO, parseISO } from "date-fns";
const PostHeader = ({
  title,
  published,
  categories,
}: {
  title: string;
  published: string;
  categories: IPostCategory[];
}) => {
  const formatedDate = format(parseISO(published), "dd MM, yyyy");

  return (
    <div className="flex flex-col gap-[15px] w-full max-w-[900px] container-article">
      <div className="flex gap-[15px] italic text-bodyS">
        <ul className="flex">
          {categories.map((category, i) => {
            return (
              <li key={category.title}>
                {i !== 0 && (
                  <span className="mx-[5px] text-base-content/40">|</span>
                )}
                <Link
                  href={`/novosti?category=${category.slug.current}`}
                  className="hover:text-secondary transition-universal"
                >
                  {category.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <time>{formatedDate}</time>
      </div>
      <span className="small-divider"></span>
      <h1 className="text-headingM font-medium text-center md:text-left">
        {title}
      </h1>
    </div>
  );
};

export default PostHeader;
