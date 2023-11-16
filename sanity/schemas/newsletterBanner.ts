import { defineType, defineField } from "sanity";
import colorInputComponent from "./customFieldComponents/colorInputComponent";

export default defineType({
  name: "newsletterBanner",
  title: "Newsletter Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title*",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
    }),
    defineField({
      name: "background",
      title: "Background Image*",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Text Color*",
      type: "string",
      components: {
        input: colorInputComponent,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
