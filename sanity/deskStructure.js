// ./deskStructure.js

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      /*   S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ), */
      S.listItem()
        .title("Vijesti")
        .child(
          S.list()
            .title("Vijesti sekcija")
            .items([
              S.listItem().title("Sve Vijesti / Kreiraj").child(
                /* Create a list of all posts */
                S.documentList().title("Vijesti").filter('_type == "post"')
              ),
              S.listItem().title("Autori").child(
                /* Create a list of all posts */
                S.documentList().title("Autori").filter('_type == "author"')
              ),
              S.listItem()
                .title("Kategorije")
                .child(
                  S.documentList()
                    .title("Kategorije")
                    .filter('_type == "category"')
                ),
            ])
        ),
      S.listItem()
        .title("Banner")
        .child(
          S.document()
            .schemaType("banner")
            .documentId("74aadb36-948b-48fa-89e7-933006464546")
        ),
      S.listItem()
        .title("Pokrovitelji")
        .child(
          S.list()
            .title("pokrovitelji")
            .items([
              S.listItem()
                .title("Platinasti Pokrovitelji")
                .child(
                  S.document()
                    .title("Platinasti Pokrovitelji")
                    .schemaType("sponsors")
                    .documentId("platinasti-pokrovitelji")
                ),
              S.listItem()
                .title("Zlatni Pokrovitelji")
                .child(
                  S.document()
                    .title("Zlatni Pokrovitelji")
                    .schemaType("sponsors")
                    .documentId("zlatni-pokrovitelji")
                ),
              S.listItem()
                .title("Sreberni Pokrovitelji")
                .child(
                  S.document()
                    .title("Sreberni Pokrovitelji")
                    .schemaType("sponsors")
                    .documentId("sreberni-pokrovitelji")
                ),
              S.listItem()
                .title("Medijski Pokrovitelji")
                .child(
                  S.document()
                    .title("Medijski Pokrovitelji")
                    .schemaType("sponsors")
                    .documentId("medijski-pokrovitelji")
                ),
            ])
        ),
      S.listItem()
        .title("Članovi")
        .child(
          S.list()
            .title("Članovi")
            .items([
              S.listItem()
                .title("Upravni Odbor")
                .child(
                  S.documentList()
                    .title("Upravni Odbor")
                    .filter('_type == "members" && boardOfDirectors == true')
                ),
              S.listItem()
                .title("Svi Članovi")
                .child(
                  S.documentList()
                    .title("Svi Članovi")
                    .filter('_type == "members"')
                ),
              S.listItem()
                .title("Pozicije")
                .child(
                  S.documentList()
                    .title("Lista Pozicija")
                    .filter('_type == "memberRole" ')
                ),
            ])
        ),
      S.listItem()
        .title("Newsletter")
        .child(
          S.list()
            .title("Newsletter")
            .items([
              S.listItem()
                .title("Preplatnici")
                .child(
                  S.documentList()
                    .title("Email Adrese")
                    .filter('_type == "newsletterEmailList"')
                ),
            ])
        ),
      S.listItem()
        .title("poruke")
        .child(
          S.list()
            .title("poruke")
            .items([
              S.listItem()
                .title("Kontakt")
                .child(
                  S.documentList()
                    .title("Kontakt")
                    .filter('_type =="contactMessage" &&  formType=="kontakt" ')
                ),
              S.listItem()
                .title("Članarine")
                .child(
                  S.documentList()
                    .title("Članarine")
                    .filter(
                      '_type =="contactMessage" &&  formType=="clanarina" '
                    )
                ),
              S.listItem()
                .title("Pokrovitelji")
                .child(
                  S.documentList()
                    .title("Pokrovitelji")
                    .filter(
                      '_type =="contactMessage" &&  formType=="pokrovitelj" '
                    )
                ),
              S.listItem()
                .title("Sve")
                .child(
                  S.documentList()
                    .title("Sve poruke")
                    .filter('_type =="contactMessage"')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            "siteSettings",
            "banner",
            "post",
            "author",
            "category",
            "sponsors",
            "members",
            "memberRole",
            "newsletterEmailList",
            "contactMessage",
          ].includes(listItem.getId())
      ),
    ]);

/* // ./deskStructure.js

export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Site Colors")
                .child(S.document().schemaType("colors").documentId("colors")),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("navigation").documentId("navigation")
                ),
            ])
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "colors", "navigation"].includes(listItem.getId())
      ),
    ]);
 */
