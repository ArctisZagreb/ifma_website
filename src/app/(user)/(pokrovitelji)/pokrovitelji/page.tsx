import React from "react";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm/ContactForm";
const PokroviteljiPage = () => {
  return (
    <>
      <section className="section-mb">
        <div className="article-split">
          <div className="article-split-text">
            <div className="article-main-title-container">
              <h1 className="article-h1">Pokrovitelji</h1>
              <p className="article-h1-subtitle">
                Pogodnosti za pokrovitelje (organizacije)
              </p>
              <span className="small-divider"></span>
            </div>
            <p className="article-p">
              Primjetite primjetno poboljšanje učinkovitosti i produktivnosti
              vešeg portfelja nekretnina i FM tima.
            </p>
            <p className="article-p">
              Prepoznajte prednosti i slabosti organizacije pomoću usporednih
              studija.
            </p>
            <p className="article-p">
              Preuzmite najbolje prakse upravljanja radnim mjestom, vodiče o
              održivosti i odgovarajuću FM obuku za vaš tim.
            </p>
            <p className="article-p">
              Povećajte svijest o problemima, trendovima i zakonodavnoj
              regulativi koja utječe na radno mjesto unutar vaše organizacije.
            </p>
            <p className="article-p">
              Smanjite rizike od odgovornosti organizacije s informiranim FM
              timom.
            </p>
            <p className="article-p">
              Dođite do pouzdanih informacija o najnovijim rješenjima za
              proizvode i usluge, kako bi zadovoljili vaše raznolike potrebe
              radnog mjesta.
            </p>
            <p className="article-p article-emphesise">
              Želite li postati pokrovitelj?
            </p>
          </div>
          <div className="article-split-media">
            <div className="h-[300px] lg:h-[500px]">
              <Image
                src="/assets/images/o-nama/handshake.png"
                width={600}
                height={600}
                alt="decorative purpose"
                className="article-image-split"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-mb">
        <ContactForm formType="pokrovitelj" />
      </section>
    </>
  );
};

export default PokroviteljiPage;
