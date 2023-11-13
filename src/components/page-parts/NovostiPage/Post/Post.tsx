// ./nextjs-app/app/_components/Post.tsx

"use client";

import Image from "next/image";
// @ts-ignore
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/../sanity/lib/client";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostSidebarLinks from "./PostSidebarLinks";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  const { title, body, mainImage, publishedAt, categories } = post;

  return (
    <article className="flex flex-col gap-[20px]">
      <div>
        <PostHeader
          title={title}
          published={publishedAt}
          categories={categories}
        />
      </div>
      <div className="w-full h-[300px] lg:h-[600px] ">
        {post?.mainImage ? (
          <>
            <Image
              className=" w-full h-full hidden lg:block object-cover"
              src={builder.image(post.mainImage).width(1200).height(600).url()}
              width={1200}
              height={600}
              alt={post?.mainImage?.alt}
              loading="eager"
            />
            <Image
              className=" w-full h-full lg:hidden object-cover"
              src={builder.image(post.mainImage).width(600).height(300).url()}
              width={600}
              height={300}
              alt={post?.mainImage?.alt}
              loading="eager"
            />
          </>
        ) : null}
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row">
        <PostBody body={post.body} />
        <PostSidebarLinks />
      </div>
    </article>
  );
}
