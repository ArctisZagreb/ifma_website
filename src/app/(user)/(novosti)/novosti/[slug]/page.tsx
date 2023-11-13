import { SanityDocument } from "next-sanity";
import { client } from "../../../../../../sanity/lib/client";
import {
  postPathsQuery,
  postQuery,
} from "../../../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../../../sanity/lib/sanityFetch";
import Post from "@/components/page-parts/NovostiPage/Post/Post";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });

  return <main>{post && <Post post={post} />}</main>;
}
