import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import React from "react";
import Image from "next/image";
import ArticleListItem from "@/components/article/ArticleListItem";
const IfmaUHrvatskojPage = () => {
  return (
    <>
      <article>
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
              IFMA Croatia Chapter ili IFMA Hrvatska je hrvatski ogranak
              međunarodnog udruženja za Upravljanje resursima i uslugama, s
              ciljem lokalne i regionalne promocije te razvoja profesije
              facility managementa (FM).
            </p>
            <p className="article-p">
              IFMA Hrvatska neprofitna je udruga koja djeluje u Hrvatskoj od
              2019. godine. Strukturu Udruge čini Skupština, Nadzorni odbor i
              Upravni odbor, kojeg predstavljaju izabrani članovi IFMA Hrvatske,
              a čiji je zadatak pružanje kratkoročnih, srednjoročnih i
              dugoročnih strateških smjernice razvoja udruge.
            </p>
            <h4 className="article-h4">Misija</h4>
            <p className="article-p">
              Misija IFMA Hrvatske je proširiti stručno znanje u području
              upravljanja resursima i uslugama i postati središnja točka
              umrežavanja stručnjaka za tu struku (Facility Management) u
              Hrvatskoj, a potencijalno i u regiji.
            </p>
            <h4 className="article-h4">Vizija</h4>
            <p className="article-p">
              Vizija IFMA Hrvatske je omogućiti priznavanje profesije
              upravitelja resursima i uslugama (Facility Management) u poslovnom
              i obrazovnom okruženju.
            </p>
          </div>
          <div className="article-split-media ">
            <Image
              src="/assets/images/o-nama/ifma-hrvatska.jpg"
              width={600}
              height={400}
              className="article-image-split"
              alt="decoration image"
            />
          </div>
        </div>
        <div className="article-dark-wrapper">
          <div className="list-title-big">
            <p>Ciljevi IFMA Hrvatske:</p>
            <span className="small-divider"></span>
          </div>
          <ul className="article-list">
            <ArticleListItem borderColor="border-base-300/30">
              Povezivati ljude aktivne u struci upravljanja resursima i uslugama
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Razviti i uspostaviti mreže za razmjenu znanja i informacija
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Utjecati na formiranje znanstvenog, stručnog i javnog mišljenja o
              bitnim pitanjima unutar profesije upravljanja resursima i uslugama
              (FM)
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Aktivno pridonositi razvoju lokalnih i međunarodnih standarda
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Stvarati i podržavati tiskana izdanja, zbornike, konferencije i
              seminare
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30">
              Uspostaviti i razviti suradnju s drugim nacionalnim FM udruženjima
            </ArticleListItem>
            <ArticleListItem borderColor="border-base-300/30" lastInList={true}>
              Surađivati s IFMA-om i njezinim podružnicama
            </ArticleListItem>
          </ul>
        </div>
      </article>
      <section className="section-mb">
        <BecomeMemberBanner />
      </section>
      <section>
        <SponsorsList />
      </section>
    </>
  );
};

export default IfmaUHrvatskojPage;
