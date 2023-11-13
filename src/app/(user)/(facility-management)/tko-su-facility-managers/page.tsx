import React from "react";
import Image from "next/image";
import { FACILITY_MANAGERS_RESPONSABILITIES } from "@/constants";
import { ResponsibilityCard } from "@/components/cards/ResponsibilityCard/ResponsibilityCard";
const TkoSuFacilityManagersPage = () => {
  return (
    <article>
      <section className="article-split">
        <div className="article-split-text">
          <div className="article-main-title-container">
            <h1 className="article-h1">Tko su Facility Managers?</h1>
            <p className="article-h1-subtitle">
              Tko su upravitelji resursima i uslugama (facility managers)?
            </p>
            <span className="small-divider"></span>
          </div>
          <p className="article-p">
            Upravitelji resursima i uslugama (facility managers) mogu imati
            mnogo različitih zvanja i pridružiti se profesiji na različite
            načine. Odgovorni su za osiguravanje skladnog rada sustava
            izgrađenog okoliša ili objekta.
          </p>
          <p className="article-p">
            Upravitelji resursima i uslugama doprinose poslovanju organizacije
            kroz njihovu brigu za održavanje onoga što je često najvrijednija
            imovina organizacije, kao što su nekretnine, zgrade, oprema i ostalo
            bitno za smještaj osoblja i opreme te produktivnost i ostali bitni
            aspekti poslovanja.
          </p>
          <p className="article-p">
            Iako upravitelji resursima i uslugama nemaju uvijek slične nazive,
            oni dijele zajedničke uloge unutar svojih organizacija, uključujući
            uloge, primjerice, upravitelja održavanjem, rizicima, izvedbom i
            kvalitetom itd.
          </p>
          <p className="article-p">
            IFMA je 2016. godine pokrenula ažuriranu Globalnu analizu radnih
            zadataka (Global Job Task Analysis – GJTA) kako bi utvrdila koje su
            uloge i odgovornosti najvažnije za suvremeno upravljanje resursima i
            uslugama (facility management).
          </p>
          <p className="article-p">
            Na osnovu odgovora stručnjaka iz 62 zemlje, IFMA je uspostavila 11
            temeljnih kompetencija modernog upravljanja resursima i uslugama
            (FM). Mnoge su nadležnosti bile u skladu s izvornim izvješćem GJTA
            za 2009. godinu, ali novo je izvješće uključivalo i ažuriranu
            terminologiju i proširene odgovornosti. Neke od značajnijih promjena
            bile su – veći naglasak na upravljanju promjenama, prikupljanju
            podataka i upravljanju informacijama. Prema rezultatima GJTA (2016.
            godine) IFMA je utvrdila da sljedeća znanja, vještine i sposobnosti
            obuhvaćaju cijeli opseg upravljanja resursima i uslugama (FM):
          </p>
        </div>
        <div className="article-split-media">
          <div className="article-image-split-container ">
            <Image
              width={400}
              height={600}
              alt="decorative purpose"
              src="/assets/images/facility-management/tko-su-facility-managers.avif"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="article-dark-wrapper text-center">
        <div className="max-w-[700px] mx-auto flex flex-col items-center gap-[20px]">
          <p className="text-[120px] leading-[100px]  font-bold">11</p>
          <p className="text-headingMMobile lg:text-headingM">
            Odgovornosti koje imaju upravitelji resursima i uslugama (FM)
          </p>
          <span className="small-divider bg-white"></span>
        </div>
      </section>
      <section className="section-mb">
        <div className="grid-regular">
          {FACILITY_MANAGERS_RESPONSABILITIES.map((card, i) => {
            return (
              <ResponsibilityCard
                key={card.id}
                cardData={{ ...card, number: i + 1 }}
              />
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default TkoSuFacilityManagersPage;
