import { defineType, defineField } from "sanity";

export default defineType({
  name: "newsletterEmailList",
  title: "Newsletter Email Lista",
  type: "document",
  fields: [
    {
      name: "emailAddress",
      title: "Email Adresa",
      type: "string",
    },
    {
      name: "dateSubscribed",
      title: "Preplatio se",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
});
