import { defineType, defineField } from "sanity";

export default defineType({
  name: "boardMembersShowcase",
  title: "Upravni Odbor Prikaz",
  type: "document",
  fields: [
    {
      name: "showcaseList",
      title: "Lista za prikaz na stranici",
      type: "array",
      of: [{ type: "reference", to: { type: "members" } }],
    },
  ],
});
