import { defineType, defineField } from "sanity";

export default defineType({
  name: "memberRole",
  title: "Pozicija",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Ime Pozicije*",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Opis Uloge",
      type: "text",
    }),
  ],
});
