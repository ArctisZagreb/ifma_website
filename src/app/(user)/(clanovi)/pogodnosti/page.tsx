import ArticleListItem from "@/components/article/ArticleListItem";
import {
  GLAVNE_POGODNOSTI,
  SVJETSKA_VJECA,
  SVJETSKE_ZAJEDNICE,
} from "@/constants";
import React from "react";
import Image from "next/image";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
const PogodnostiPage = () => {
  return (
    <>
      <article className="container-article section-mb">
        <section className="container-wide container-article">
          <div className="article-main-title-container">
            <h1 className="article-h1">Aktivnosti i pogodnosti za članove</h1>
            <span className="small-divider"></span>
          </div>
          <p className="article-p">
            IFMA Hrvatska je stručna udruga koja je dio svjetske IFMA mreže.
            Udruga po prvi put na hrvatskom tržištu nudi pristup globalnoj mreži
            članova, znanja i standarda u industriji uz fokus na lokalno
            umrežavanje i edukaciju članova kroz seminare, obilaske nekretnina,
            stručne skupove i sl.
          </p>
          <div className="article-primary-wrapper">
            <p className="text-center text-headingLMobile lg:text-headingL font-normal lg:font-normal ">
              9 glavnih pogodnosti
            </p>
          </div>
        </section>
        <section className=" bg-gradient-to-br from-neutral-700 to-neutral-950 text-neutral-content">
          <div className="grid-regular">
            {GLAVNE_POGODNOSTI.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="px-[20px] relative py-[50px] md:max-w-[430px] w-full max-sm:text-center  "
                >
                  <span className="absolute right-0 bottom-0 text-[100px] text-base-200/10">
                    {i + 1}
                  </span>
                  <p className="mb-[20px] font-semibold">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <div className="container-wide container-article">
          <section className="article-split">
            <div className="article-split-text">
              <p className="article-p">
                Svaki član IFMA-e učlanjenjem dobiva mogućnost pristupa jednom
                od 6 svjetskih zajednica, te 16 svjetskih vijeća industrija, što
                otvara brojne mogućnosti za članove:
              </p>
              <ul>
                <ArticleListItem>
                  <span className="article-emphesise">
                    Usmjereno umrežavanje:
                  </span>
                  dijelite radna iskustva i razmjenjujte najbolje prakse s
                  kolegama
                </ArticleListItem>
                <ArticleListItem>
                  <span className="article-emphesise">
                    Aktivno područje internetske rasprave:
                  </span>
                  Sudjelujte u usko specijaliziranoj grupi za raspravu za
                  rješavanje problema vezanih uz posao i pomažite kolegama
                  članovima s projektima i karijernim ciljevima
                </ArticleListItem>
                <ArticleListItem>
                  <span className="article-emphesise">
                    Ciljane informacije:{" "}
                  </span>
                  Pratite najnovije prakse, trendove i tehnologije
                </ArticleListItem>
                <ArticleListItem>
                  <span className="article-emphesise">Ciljani resursi:</span>
                  Pristupite vijestima, studijama slučaja, webinarima i drugim
                  alatima za poboljšanje vašeg znanja i vještina
                </ArticleListItem>
              </ul>
            </div>
            <div className="article-split-media">
              <div className=" h-[500px] ">
                <Image
                  className="article-image-split"
                  src="/assets/images/clanovi/pogodnosti-3.png"
                  width={600}
                  height={500}
                  alt="decorative purpose"
                />
              </div>
            </div>
          </section>
          <section className="">
            <div className="article-dark-wrapper flex flex-col gap-[10px]">
              <p className="article-p">
                IFMA je stvorila zajednice kao grupe unutar globalnog članstva
                IFMA-e temeljene na zajedničkom interesu za određena područja FM
                kompetencija. Zajednice omogućuju članovima razvoj kroz usko
                usmjereni izvor obrazovanja, informacija i interakcija u
                području upravljanja resursima i uslugama (FM).
              </p>
              <span className="small-divider"></span>
              <p className="article-p sm:font-bold">
                6 SVJETSKIH ZAJEDNICA (IFMA COMMUNITIES)
              </p>
            </div>

            <ul className="grid-two-cols-list py-[20px] mb-[20px]">
              {SVJETSKE_ZAJEDNICE.map((item, i) => {
                return <ArticleListItem key={i}>{item}</ArticleListItem>;
              })}
            </ul>
          </section>
          <section>
            <div className="article-dark-wrapper flex flex-col gap-[10px]">
              <p className="article-p">
                IFMA je stvorila vijeća industrija kako bi zadovoljila potrebe
                članova za umrežavanjem i informacijama. Kako su globalna po
                svojoj prirodi, vijeća industrija nisu ograničena geografskim
                granicama. U mogućnosti ste komunicirati s kolegama širom
                svijeta o pitanjima, problemima i najboljim praksama specifičnim
                za vaše područje upravljanja resursima i uslugama (FM).
              </p>
              <span className="small-divider"></span>
              <p className="article-p sm:font-bold">
                16 SVJETSKIH VIJEĆA INDUSTRIJA (IFMA INDUSTRY COUNCILS):
              </p>
            </div>
            <ul className="grid-two-cols-list py-[20px] mb-[20px]">
              {SVJETSKA_VJECA.map((item, i) => {
                return <ArticleListItem key={i}>{item}</ArticleListItem>;
              })}
            </ul>
          </section>
        </div>
      </article>
      <section className="section-mb container-wide ">
        <BecomeMemberBanner />
      </section>
      <section className="section-mb container-wide ">
        <SponsorsList sponsorsType="all" />
      </section>
    </>
  );
};

export default PogodnostiPage;
