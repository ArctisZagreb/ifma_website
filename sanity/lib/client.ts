import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

// Javni, read-only client (koristi se i u browseru). Write client je u writeClient.ts (samo server).
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
