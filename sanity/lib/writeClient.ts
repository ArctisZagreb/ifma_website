import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Token s pravom pisanja — NIKAD s NEXT_PUBLIC_ prefiksom, inace zavrsi u JS bundleu u browseru.
const token = process.env.SANITY_API_WRITE_TOKEN;

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
  token,
});

export const assertWriteToken = () => {
  if (!token) {
    throw new Error("Missing environment variable: SANITY_API_WRITE_TOKEN");
  }
};
