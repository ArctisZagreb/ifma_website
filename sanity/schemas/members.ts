import { defineType, defineField } from "sanity";

export default defineType({
  name: "members",
  title: "Članovi",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ime*",
      type: "string",
    }),
    defineField({
      name: "surname",
      title: "Prezime*",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc, context) => `${doc.name}-${doc.surname}`,
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Slika",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "boardOfDirectors",
      title: "Dio Upravnog Odbora",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "role",
      title: "Pozicija*",
      type: "reference",
      to: [{ type: "memberRole" }],
    }),
    defineField({
      name: "email",
      title: "Email Adresa",
      type: "string",
    }),
    defineField({
      name: "telephone",
      title: "Telefon",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "blockContent",
    }),
  ],
});
