import React from "react";
import { getCategories, getPosts } from "../../../../../sanity/lib/queries";

const PostSidebarLinks = async () => {
  const zadnjeObjave = await getPosts(5, "all");
  const postCategories = await getCategories();

  return <div></div>;
};

export default PostSidebarLinks;
