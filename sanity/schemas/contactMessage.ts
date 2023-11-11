import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactMessage",
  title: "Poruka",
  type: "document",
  fields: [
    defineField({
      name: "sender",
      title: "Pošiljatelj",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Adresa",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Poruka",
      type: "text",
    }),
    defineField({
      name: "formType",
      title: "Tip Popunjene forme",
      type: "string",

      options: {
        list: ["kontakt", "pokrovitelj", "clanarina"],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "date",
      title: "Datum Poruke",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
  ],
});
