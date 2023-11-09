import { defineField, defineType } from "sanity";

export default defineType({
  name: "sponsors",
  title: "Sponsors",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineField({
          name: "sponsor",
          title: "Sponsor",
          type: "sponsor",
        }),
      ],
    }),
  ],
});
