import { YoutubeVideo } from "@/components/UI/YoutubeVideo";
import React from "react";

const StoJeFacilityManagementPage = () => {
  return (
    <article>
      <div className="article-split">
        <div className="article-split-text">
          <div className="article-main-title-container">
            <h1 className="article-h1">Što je Facility Management?</h1>
            <span className="small-divider"></span>
          </div>
          <h4 className="article-h4 ">
            Definicija upravljanja resursima i uslugama (facility management)
          </h4>
          <p className="article-p">
            Upravljanje resursima i uslugama (facility management) je profesija
            koja obuhvaća više disciplina kako bi se osigurala funkcionalnost,
            udobnost, sigurnost i učinkovitost izgrađenog okoliša integrirajući
            ljude, prostor, procese i tehnologiju.{" "}
            <span className="article-emphesise">[IFMA]</span>
          </p>
          <p className="article-p">
            Međunarodna organizacija za standardizaciju ISO definira upravljanje
            resursima i uslugama (facility management) kao “Organizacijska
            funkcija koja objedinjuje ljude, mjesta i procese u izgrađenom
            okolišu s ciljem poboljšanja kvalitete života ljudi i produktivnosti
            osnovne djelatnosti.”{" "}
            <span className="article-emphesise">[ISO 41011:2017]</span>
          </p>
          <p className="article-p">
            Europski standard za upravljanje resursima i uslugama (facility
            management), definira tu struku kao “integraciju procesa unutar
            organizacije radi održavanja i razvoja dogovorenih usluga koje
            podržavaju i poboljšavaju učinkovitost njenih primarnih aktivnosti.”
            <span className="article-emphesise">[EN15221-1: 2006]</span>
          </p>
        </div>
        <div className="article-split-media">
          <YoutubeVideo
            videoData={{
              url: "https://www.youtube.com/watch?v=ZYcGoE_sau4",
              videoDesc: "Izvor: IFMA – RICS",
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default StoJeFacilityManagementPage;
