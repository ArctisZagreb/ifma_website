import { v4 as uuid } from "uuid";
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
        path: "/novosti?category=globalne-vijesti",
        children: [],
      },
      {
        id: 11,
        text: "eu vijesti",
        path: "/novosti?category=eu-vijesti",
        children: [],
      },
      {
        id: 12,
        text: "lokalne vijesti",
        path: "/novosti?category=lokalne-vijesti",
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

export const FACILITY_MANAGEMENT_CARDS = [
  {
    id: "0",
    title: "Što je Facility Management?",
    path: "/sto-je-facility-management",
    image:
      "/assets/images/facility-management/card-sto-je-facility-management.avif",
    text: "Upravljanje resursima i uslugama (facility management) je profesija koja obuhvaća više disciplina kako bi se osigurala funkcionalnost, udobnost, sigurnost i učinkovitost izgrađenog okoliša integrirajući ljude, prostor, procese i tehnologiju.",
  },
  {
    id: "1",
    title: "Tko su Facility Managers?",
    path: "/tko-su-facility-managers",
    image:
      "/assets/images/facility-management/card-tko-su-facility-managers.avif",
    text: "Upravitelji resursima i uslugama (facility managers) mogu imati mnogo različitih zvanja i pridružiti se profesiji na različite načine. Odgovorni su za osiguravanje skladnog rada sustava izgrađenog okoliša ili objekta.",
  },
  {
    id: "2",
    title: "Facility Management tržište",
    path: "/facility-management-trziste",
    image:
      "/assets/images/facility-management/card-facility-management-trziste.avif",
    text: "Prema „Global FM market report 2018“ globalno FM tržište 2017. godine iznosilo je 1152 milijardi USD, a postotak zaposlenih u FM industriji u ukupnom broju zaposlenih iznosio je 1,7%.",
  },
];
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
import { HiMiniUser } from "react-icons/hi2";
export const FACILITY_MANAGERS_RESPONSABILITIES = [
  {
    id: uuid(),
    title: "POPUNJENOST PROSTORA I LJUDSKI FAKTORI",

    subtitle: "Occupancy and human factors",
    items: [
      {
        id: uuid(),
        text: "Nadgledajte radno okruženje radi podrške zapošljavanju, zadržavanju radnika, motivaciji i produktivnosti",
      },
      {
        id: uuid(),
        text: "Stvorite zdravo i sigurno radno okruženje pogodno za inovacije",
      },
      {
        id: uuid(),
        text: "Osigurajte sigurnost koja zadovoljava potrebe građevine (fizička sigurnost, kontrola pristupa i informacije)",
      },
      {
        id: uuid(),
        text: "Osigurajte osobne i profesionalne mogućnosti rasta i razvoja (treniranje, mentorstvo, obuka, obrazovanje i karijera)",
      },
    ],
  },
  {
    id: uuid(),
    title: "UPRAVLJANJE ODRŽAVANJEM",
    subtitle: "Operations and maintenance",
    items: [
      {
        id: uuid(),
        text: "Upravljajte i nadgledajte nabavu, instalaciju, rad, održavanje i odlaganje sustava i opreme građevine, te konstrukcijskih, unutrašnjih, vanjskih i temeljnih elemenata",
      },
      {
        id: uuid(),
        text: "Upravljajte i nadgledajte usluge za korisnike (parking, kućne usluge, usluge ishrane, vratarske usluge, helpdesk i servicedesk službe, te sigurnosti)",
      },
      {
        id: uuid(),
        text: "Napravite, preporučite, upravljajte i nadgledajte zahtjeve operativnog planiranja građevine (kontrola temperature, osvjetljenje, zamjena opreme, itd.)",
      },
      {
        id: uuid(),
        text: "Pratite upotrebu i performanse svih građevinskih sustava, opreme i terena",
      },
    ],
  },
  {
    id: uuid(),
    title: "ODRŽIVOST",
    subtitle: "Sustainability",
    items: [
      {
        id: uuid(),
        text: "Upravljajte i nadgledajte posvećenost cijele organizacije održivosti prirodnih i izgrađenih okoliša",
      },
      {
        id: uuid(),
        text: "Ocijenite i upravljajte postupkom životnog ciklusa imovine",
      },
    ],
  },
  {
    id: uuid(),
    title: "INFORMACIJE O GRAĐEVINI I UPRAVLJANJE TEHNOLOGIJAMA",
    subtitle: "Facility information and technology management",
    items: [
      {
        id: uuid(),
        text: "Pratite i ocjenjujte tehnološke trendove i inovacije",
      },
      {
        id: uuid(),
        text: "Provodite procjene i surađujte na analizi potreba za FM tehnologijom",
      },
      {
        id: uuid(),
        text: "Uskladite tehnologije upravljanja resursima i uslugama (FM) s organizacijskom informacijskom tehnologijom (EIM)",
      },
      {
        id: uuid(),
        text: "Procijenite primjenu tehnologije u procesima upravljanja resursima i uslugama (FM)",
      },
      {
        id: uuid(),
        text: "Procjenite, implementirajte i upravljajte integriranim sustavima upravljanja radnim mjestima (IWMS) i sustavima za upravljanje resursima i uslugama (CAFM)",
      },
    ],
  },
  {
    id: uuid(),
    title: "UPRAVLJANJE RIZICIMA",
    subtitle: "Risk management",
    items: [
      {
        id: uuid(),
        text: "Napravite planove i postupke za upravljanje rizikom i upravljanje u kriznim situacijama",
      },
      {
        id: uuid(),
        text: "Upravljajte, nadgledajte i podržavajte program kontinuiteta poslovanja čitave organizacije",
      },
    ],
  },
  {
    id: uuid(),
    title: "KOMUNIKACIJA",
    subtitle: "Communication",
    items: [
      {
        id: uuid(),
        text: "Napravite i provedite komunikacijski plan upravljanja resursima i uslugama (FM) (poruke, podsjetnici, misija i vizija)",
      },
      {
        id: uuid(),
        text: "Promičite informacije i preporuke za upravljanje resursima i uslugama (FM) unutarnjim i vanjskim dionicima (osoblje ustanove, javnost, viši menadžment, kupci i upravni odbori)",
      },
    ],
  },
  {
    id: uuid(),
    title: "IZVEDBA I KVALITETA",
    subtitle: "Performance and quality",
    items: [
      {
        id: uuid(),
        text: "Napravite, pregledajte i usporedite mjerne podatke o učinku za usluge upravljanja resursima i uslugama (FM) (usporedba, mjerenje vidljivih ponašanja, odgovor na usluge, vrijeme rješavanja itd.)",
      },
      {
        id: uuid(),
        text: "Prikupite, provjerite, analizirajte i izvijestite podatke o upravljanju resursima i uslugama (FM) iz različitih izvora (planovi prostora, zadovoljstvo korisnika i povratne informacije)",
      },
      {
        id: uuid(),
        text: "Procijenite načine za poboljšanje produktivnosti na radnom mjestu, te napravite i provedite poboljšanja procesa",
      },
      {
        id: uuid(),
        text: "Ispitajte i dokumentirajte poštivanja kodeksa, propisa, politika i standarda",
      },
    ],
  },
  {
    id: uuid(),
    title: "VOĐENJE I STRATEGIJA",
    subtitle: "Leadership and strategy",
    items: [
      {
        id: uuid(),
        text: "Vodite, nadahnjujte i utječite na organizaciju, tražite metode najbolje prakse, upravljajte promjenama, promičite kontinuirano poboljšavanje i osigurajte potrebne alate za sve navedeno",
      },
      {
        id: uuid(),
        text: "Uskladite strateške zahtjeve upravljanja resursima i uslugama (FM) sa zahtjevima cijelokupne organizacije",
      },
    ],
  },
  {
    id: uuid(),
    title: "NEKRETNINE",
    subtitle: "Real estate",
    items: [
      {
        id: uuid(),
        text: "Odredite i procijenite zahtjeve za nekretninama (iskorištenost prostora, upravljanje, optimalna upotreba)",
      },
      {
        id: uuid(),
        text: "Kupite, raspolažite nekretninama i prodajte ih (poslovne, institucionalne, industrijske, stambene, zakupljene i u vlasništvu)",
      },
      {
        id: uuid(),
        text: "Upravljajte i nadgledajte portfelj nekretnina (u vlasništvu, zakupu, podzakupu, suvlasništvu i ugovorenom upravljanju)",
      },
    ],
  },
  {
    id: uuid(),
    title: "UPRAVLJANJE PROJEKTIMA",
    subtitle: "Project management",
    items: [
      {
        id: uuid(),
        text: "Definirajte i programirajte projekte (svrha, veličina, opseg, raspored, proračun i potrebe korisnika)",
      },
      {
        id: uuid(),
        text: "Upravljajte i nadgledajte tipične projekte upravljanja resursima i uslugama (FM) (izgradnja, selidba, obnova, organizacijska promjena) i evaluirajte rezultate projekata",
      },
    ],
  },
  {
    id: uuid(),
    title: "FINANCIJE I POSLOVANJE",
    subtitle: "Finance and business",
    items: [
      {
        id: uuid(),
        text: "Izradite, preporučite, upravljajte i nadgledajte proračunske potrebe vezane za upravljanje resursima i uslugama (FM) (trošak, operativni i kapitalni budžeti)",
      },
      {
        id: uuid(),
        text: "Administrirajte i upravljajte financijama povezanim s ugovornim obvezama",
      },
    ],
  },
];

export const TRZISTE_STRATEGIJE_TOCKE = [
  {
    id: uuid(),
    title: "Partnerstvo s dijeljenjem rizika",
    list: [
      {
        id: uuid(),
        title: "Prilagođavanje modela usluga poslovnim ciljevima klijenta",
        list: null,
      },
      {
        id: uuid(),
        title: "Npr. ugovor za učinkovitost gospodarenja energijom",
        list: null,
      },
    ],
  },
  {
    id: uuid(),
    title: "Dugotrajna partnerstva",
    list: [
      {
        id: uuid(),
        title: "Poboljšanje učinkovitosti na period duži od dvije godine",
        list: null,
      },
      {
        id: uuid(),
        title: "Nužna interaktivnost između klijenta i pružatelja usluga",
        list: null,
      },
    ],
  },
  {
    id: uuid(),
    title: "Transparentnost i dosljednost",
    list: [
      {
        id: uuid(),
        title:
          "Dokumentacija i nadzor nad konzistentnošću i kvalitetom pružanja usluga",
        list: null,
      },
    ],
  },
  {
    id: uuid(),
    title: "Model „Obavi uslugu samostalno“",
    list: [
      {
        id: uuid(),
        title:
          "Direktno obavljanje usluge bez podizvođača pruža bolju vrijednost za novac",
        list: null,
      },
      { id: uuid(), title: "Poboljšana dosljednost i odgovornost", list: null },
    ],
  },
  {
    id: uuid(),
    title: "Usluge s dodatnom vrijednošću",
    list: [
      {
        id: uuid(),
        title: "Pružanje specifičnih usluga koje nisu uobičajene na tržištu",
        list: null,
      },
      { id: uuid(), title: "Npr. treninzi specifični za klijenta", list: null },
    ],
  },
  {
    id: uuid(),
    title: "Integrirane usluge bez obzira na granice i geografsku lokaciju",
    list: [
      {
        id: uuid(),
        title: "Pružanje usluga globalno rasprostranjenim klijentima",
        list: null,
      },
      {
        id: uuid(),
        title: "Istovrsna usluga usklađena sa standardima kvalitete",
        list: null,
      },
    ],
  },
  {
    id: uuid(),
    title: "Rješenja za cjelokupni životni vijek imovine",
    list: [
      {
        id: uuid(),
        title:
          "Savjetovanje klijenta tijekom planiranja i dizajna pogona ili zgrada",
        list: null,
      },
      { id: uuid(), title: "Podrška prije i tijekom izgradnje", list: null },
    ],
  },
  {
    id: uuid(),
    title: "Integracija sa IT platformama",
    list: [
      {
        id: uuid(),
        title:
          "Interoperabilnost sa BAS (Building Automation Systems) protokolima",
        list: null,
      },
      {
        id: uuid(),
        title: "Povezivanje usluga sa IT infrastrukturom klijenata",
        list: null,
      },
    ],
  },
  {
    id: uuid(),
    title:
      "Društveno odgovorno poslovanje (CSR- Corporate Social Responsibility)",
    list: [
      {
        id: uuid(),
        title:
          "Ključno u slučajevima kada međunarodne korporacije posluju na nerazvijenim tržištima",
        list: null,
      },
      {
        id: uuid(),
        title: "Spajanje IFM usluga sa CSR inicijativama",
        list: null,
      },
    ],
  },
  {
    id: uuid(),
    title: "Zdravo i sigurno radno mjesto",
    list: null,
  },
];
