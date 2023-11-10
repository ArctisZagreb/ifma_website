import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import banner from "./schemas/banner";
import siteSettings from "./schemas/siteSettings";
import sponsors from "./schemas/sponsors";
import sponsor from "./schemas/sponsor";
import memberRole from "./schemas/memberRole";
import members from "./schemas/members";
import newsletterEmailList from "./schemas/newsletterEmailList";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    banner,
    siteSettings,
    sponsor,
    sponsors,
    memberRole,
    members,
    newsletterEmailList,
  ],
};
