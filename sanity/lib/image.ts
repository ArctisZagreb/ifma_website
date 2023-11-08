// @ts-ignore
import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";
// @ts-ignore
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";
export const imageBuilder = imageUrlBuilder(client);
/* export const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
 */
