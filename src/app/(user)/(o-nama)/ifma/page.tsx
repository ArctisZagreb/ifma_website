import ArticleListItem from "@/components/article/ArticleListItem";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import Image from "next/image";
import React from "react";

const IfmaPage = () => {
  return (
    <div className="container-wide">
      <article className="section-mb">
        <div className="article-split">
          <div className="article-split-text">
            <div className="article-main-title">
              <h1 className="article-h1">IFMA</h1>
              <p className="article-h1-subtitle">
                International Facility Management Association
              </p>
              <span className="small-divider"></span>
            </div>
            <p className="article-p">
              International Facility Management Association (IFMA) je neprofitna
              udruga osnovana 1980. godine u Sjedinjenim Američkim Državama za
              promicanje i razvoj facility managementa (FM), discipline
              Upravljanja resursima i uslugama kao podrška primarnom poslovanju
              organizacija.
            </p>
            <p className="article-p">
              Facility management disciplina globalno predstavlja načine
              strateškog upravljanja nekretninama, resursima, osnovnim
              sredstvima i uslugama organizacije, integrirajući ljude, prostor i
              procese uz korištenje tehnologije.
            </p>
            <p className="article-p">
              IFMA udruga globalno ima preko 24.000 članova u 137 ogranaka
              (lokalnih udruga) koji se nalaze u više od 100 zemalja svijeta.
              Članovi IFMA-e sudjeluju u specijaliziranim skupinama podijeljenim
              prema industrijama (16 vijeća industrija) i područjima interesa (6
              svjetskih zajednica), te zajedno upravljaju s više od 7,25
              milijardi kvadratnih metara imovine, a godišnje ostvaruju promet u
              proizvodima i uslugama u iznosu većem od 526 milijardi USD.
            </p>
          </div>

          <div className="article-split-media">
            <Image
              src="/assets/images/o-nama/IFMA-1.jpg"
              width={600}
              height={400}
              alt="decorative image"
              className="article-image-split"
              loading="eager"
            />
          </div>
        </div>
        <div className="article-dark-wrapper">
          <div className="list-title">
            <p>
              Kako bi ispunila svoju misiju „globalno unaprijeđenje
              profesionalne discipline upravljanja resursima i uslugama
              (facility management)“, na godišnjoj osnovi IFMA:
            </p>
            <span className="small-divider"></span>
          </div>
          <ul className="article-list">
            <ArticleListItem borderColor="border-base-300/30">
              Nudi profesionalni napredak kroz programe certifikacije i pruža
              niz obrazovnih tečajeva, od programa početne razine do onih za
              iskusne FM profesionalce.
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Održava „World Workplace“, najveću seriju svjetskih FM
              konferencija i izlaganja, „Facility Fusion“, intimnije okupljanje
              FM profesionalaca s moćnim umrežavanjem i sinergijom obrazovanja,
              treninga za voditelje, primjenu najboljih praksi i izlaganja.
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Provodi istraživanja koja jačaju znanje i vještine FM
              profesionalaca istodobno unaprijeđujući FM profesiju.
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Objavljuje publikacije, vodeće u industriji, uključujući časopise,
              biltene i blogove, te održava „Knowledge library“, robusnu online
              zbirku resursa koji su pregledali FM stručnjaci za sadržaj.
            </ArticleListItem>
            <ArticleListItem lastInList={true}>
              Aktivno sudjeluje na društvenim mrežama putem LinkedIna, Twittera,
              Facebooka, YouTubea i Flickra, a također je domaćin Engage
              platformi, internetskoj platformi za dijeljenje dokumenata i
              raspravu.
            </ArticleListItem>
          </ul>
        </div>
        <div className="article-split">
          <div className="article-split-text">
            <p className="article-p">
              Suradnja IFMA-RICS globalno predstavlja najznačajniji događaj u
              povijesti facility managementa, pružajući dosad potpuno novu
              razinu podrške u industriji kako bi udovoljili sve većim
              zahtjevima 25 milijuna FM profesionalaca širom svijeta.
            </p>
            <p className="article-p">
              Dvije organizacije usklađuju standarde i profesionalni razvoj u
              industriji, ujedinjujući globalnu FM zajednicu radi povećanja
              dosljednosti i objedinjavanja strategije cjeloživotnog ciklusa
              upravljanja izgrađenim okolišem. Suradnja nudi paket
              profesionalnih certifikata u upravljanju resursima i uslugama
              (facility management), pružajući globalno priznanje za FM
              stručnjake svih profila, vještina, radnog iskustva i karijernih
              ciljeva.
            </p>
            <p className="article-p">
              Za sve detalje o IFMA krovnoj udruzi pogledajte stranice u
              nastavku: <a className="article-text-link">www.ifma.org</a>
            </p>
          </div>
          <div className="article-split-media">
            <Image
              src="/assets/images/o-nama/ifmarics-logos-2.jpg"
              width={600}
              height={400}
              alt="ifma and rics logos"
              className="article-image-split"
            />
          </div>
        </div>
      </article>
      <section className="section-mb">
        <BecomeMemberBanner />
      </section>
      <section className="section-mb">
        <SponsorsList />
      </section>
    </div>
  );
};

export default IfmaPage;
