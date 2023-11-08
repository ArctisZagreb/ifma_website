import { defineField, defineType } from "sanity";
import colorInputComponent from "./customFieldComponents/colorInputComponent";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "background",
      title: "Background Image",
      type: "image",
    }),
    defineField({
      name: "color",
      title: "Text Color",
      type: "string",
      components: {
        input: colorInputComponent,
      },
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          name: "bannerItem",
          title: "Banner Item",
          type: "document",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "number",
              title: "Number",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
