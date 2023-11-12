export const NAVPATHS = [
  {
    id: 0,
    text: "naslovnica",
    path: "/",
    children: [],
  },
  {
    id: 1,
    text: "o nama",
    path: "/o-nama",
    children: [
      {
        id: 2,
        text: "ifma",
        path: "/ifma",
        children: [],
      },

      {
        id: 3,
        text: "ifma u hrvatskoj",
        path: "/ifma-u-hrvatskoj",
        children: [],
      },
      {
        id: 4,
        text: "upravni odbor",
        path: "/upravni-odbor",
        children: [],
      },
    ],
  },
  {
    id: 5,
    text: "facility management",
    path: "/facility-management",
    children: [
      {
        id: 6,
        text: "što je facility management?",
        path: "/sto-je-facility-management",
        children: [],
      },
      {
        id: 7,
        text: "Tko su Facility Managers?",
        path: "/tko-su-facility-managers",
        children: [],
      },
      {
        id: 8,
        text: "Facility Management tržište",
        path: "/facility-management-trziste",
        children: [],
      },
    ],
  },
  {
    id: 9,
    text: "novosti",
    path: "/novosti",
    children: [
      {
        id: 10,
        text: "globalne vijesti",
        path: "/globalne-vijesti",
        children: [],
      },
      {
        id: 11,
        text: "eu vijesti",
        path: "/eu-vijesti",
        children: [],
      },
      {
        id: 12,
        text: "lokalne vijesti",
        path: "/lokalne-vijesti",
        children: [],
      },
    ],
  },
  {
    id: 13,
    text: "članovi",
    path: "/clanovi",
    children: [
      {
        id: 14,
        text: "pogodnosti",
        path: "/pogodnosti",
        children: [],
      },
      {
        id: 15,
        text: "učlanite se",
        path: "/uclanite-se",
        children: [],
      },
    ],
  },
  {
    id: 16,
    text: "pokrovitelji",
    path: "/pokrovitelji",
    children: [
      {
        id: 17,
        text: "platinasti pokrovitelji",
        path: "/platinasti-pokrovitelji",
        children: [],
      },
      {
        id: 18,
        text: "zlatni pokrovitelji",
        path: "/zlatni-pokrovitelji",
        children: [],
      },
      {
        id: 19,
        text: "sreberni pokrovitelji",
        path: "/sreberni-pokrovitelji",
        children: [],
      },
      {
        id: 20,
        text: "medijski pokrovitelji",
        path: "/medijski-pokrovitelji",
        children: [],
      },
    ],
  },
  {
    id: 21,
    text: "kontakt",
    path: "/kontakt",
    children: [],
  },
];

export const WHY_IFMA_CARDS = [
  {
    icon: "/assets/images/why-ifma-cards/LEARN.avif",
    image: "/assets/images/why-ifma-cards/ifma1.avif",
    id: 0,
    title: "PROFESIONALNI RAZVOJ",
    subtitle: "Poboljšajte svoje FM vještine",
    points: [
      {
        id: 0,
        text: "Iskoristite trenutno dostupne visoko specijalizirane FM tečajeve",
      },
      {
        id: 1,
        text: "Ostanite u toku s najnovijim tehnologijama, trendovima i istraživanjima u FM području",
      },
      {
        id: 2,
        text: "Poboljšajte tehničke i komercijalne performanse građevina",
      },
    ],
  },
  {
    icon: "/assets/images/why-ifma-cards/CONNECT.avif",
    image: "/assets/images/why-ifma-cards/ifma2.avif",
    id: 1,
    title: "UMREŽAVANJE",
    subtitle: "Proširite svoju poslovnu mrežu",
    points: [
      {
        id: 0,
        text: "Surađujte s drugim FM stručnjacima u svojoj regiji kroz lokalnu Udrugu (Chapter)",
      },
      {
        id: 1,
        text: "Razmjenjujte najbolje prakse jedinstvene za svoju organizaciju putem vijeća industrija (Industry Councils)",
      },
      {
        id: 2,
        text: "Sudjelujte ili izlažite na nekoj od naših globalnih i lokalnih konferencija",
      },
    ],
  },
  {
    icon: "/assets/images/why-ifma-cards/ADVANCE.avif",
    image: "/assets/images/why-ifma-cards/ifma3.avif",
    id: 2,
    title: "USAVRŠAVANJE",
    subtitle: "Unaprijedite svoju FM karijeru",
    points: [
      {
        id: 0,
        text: "Stecite globalno priznati IFMA certifikat",
      },
      {
        id: 1,
        text: "Povećajte mogućnost plasiranja na tržištu i istaknite svoju vrijednost kao FM profesionalac",
      },
      {
        id: 2,
        text: "Stecite konkurentsku prednost na tržištu",
      },
    ],
  },
];

export const FOOTER_CONTENT = {
  kontakt: {
    title: "kontakt informacije",
    items: [
      {
        id: 0,
        title: "email",
        values: ["info@ifma.hr"],
      },
      {
        id: 1,
        title: "adresa",
        values: ["Primorska ulica 28", "10000 Zagreb, Hrvatska"],
      },
    ],
  },
  opce: {
    title: "opće informacije",
    items: [
      {
        id: 0,
        title: "Registarski broj",
        values: ["21013553"],
      },
      {
        id: 1,
        title: "OIB",
        values: ["66882941436"],
      },
      {
        id: 2,
        title: "IBAN",
        values: ["HR2624840081135133554"],
      },
    ],
  },
  socials: [
    {
      id: 0,
      type: "facebook",
      url: "https://www.ifma.hr/#",
    },
    {
      id: 1,
      type: "linkedin",
      url: "https://www.ifma.hr/#",
    },
  ],
};

export const ABOUT_US_CARDS = [
  {
    id: "0",
    title: "IFMA",
    path: "/ifma",
    image: "/assets/images/o-nama/card-ifma.webp",
    text: "International Facility Management Association (IFMA) je neprofitna udruga osnovana 1980. godine u Sjedinjenim Američkim Državama za promicanje i razvoj Facility Managementa, discipline upravljanja resursima i uslugama kao podrška poslovanju organizacija.",
  },
  {
    id: "1",
    title: "IFMA u Hrvatskoj",
    path: "/ifma-u-hrvatskoj",
    image: "/assets/images/o-nama/card-ifma-u-hrvatskoj.webp",
    text: "IFMA Croatia Chapter je hrvatski ogranak međunarodnog udruženja za upravljanje resursima i uslugama, s ciljem lokalne i regionalne promocije te razvoja profesije Facility Managementa.",
  },
  {
    id: "2",
    title: "Upravni odbor",
    path: "/upravni-odbor",
    image: "/assets/images/o-nama/card-upravni.webp",
    text: "Upravni odbor IFMA Croatia Chaptera sastoji se od aktivnih suradnika i stručnih predstavnika priznatih u području profesionalnog upravljanja resursima i uslugama, koji uživaju ugled i povjerenje članova IFMA Croatia Chapter-a kao i IFMA Europe i IFMA Upravnog odbora.",
  },
];
