"use client";
import { SanityDocument } from "next-sanity";
import React from "react";
// @ts-ignore
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/../sanity/lib/client";
import Image from "next/image";
import { IPostCategory } from "@/types/types";
import Link from "next/link";
import { format, parseISO } from "date-fns";
const builder = imageUrlBuilder(client);
const NewsCard = ({ cardData }: { cardData: SanityDocument }) => {
  const { mainImage, slug, title, previewText, categories, publishedAt } =
    cardData;
  const postLink = `/novosti/${slug.current}`;
  const formatedDate = format(parseISO(publishedAt), "dd MM, yyyy");
  return (
    <div className="flex-1 max-w-[440px] pb-[40px] relative border-b-[1px] border-neutral/20 mb-[20px]">
      {mainImage && (
        <Link
          href={postLink}
          aria-label={title}
          className="block overflow-hidden"
        >
          <Image
            className="w-full hover:scale-[1.1] transition-universal"
            src={builder.image(mainImage).width(440).height(220).url()}
            width={440}
            height={220}
            alt={mainImage.alt}
          />
        </Link>
      )}
      <div className="flex gap-[6px] my-[15px]">
        {categories &&
          categories.map((category: IPostCategory) => {
            return (
              <Link
                key={category.title}
                href={`/novosti/${category.slug.current}`}
                className="text-bodySMobile bg-neutral text-neutral-content hover:bg-neutral-focus p-[4px] transition-universal"
              >
                {category.title}
              </Link>
            );
          })}
      </div>
      <h2 className="text-secondary mb-[10px] lg:min-h-[50px] hover:text-secondary-focus transition-universal">
        <Link href={postLink} aria-label={title}>
          {title}
        </Link>
      </h2>
      <p>{previewText.substring(0, 180)}...</p>
      <span className="absolute bottom-[10px] left-0 text-bodyS text-neutral">
        {formatedDate}
      </span>
    </div>
  );
};

export default NewsCard;
