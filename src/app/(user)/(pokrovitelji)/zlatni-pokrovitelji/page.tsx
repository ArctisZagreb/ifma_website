import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import React from "react";

const ZlatniPokroviteljiPage = () => {
  return (
    <section className="section-mb">
      <div className="flex flex-col items-center mb-[60px]">
        <h1 className="text-headingMMobile lg:text-headingM ">
          Zlatni Pokrivitelji
        </h1>
        <span className="small-divider"></span>
      </div>
      <div>
        <SponsorsList sponsorsType="zlatni-pokrovitelji" />
      </div>
    </section>
  );
};

export default ZlatniPokroviteljiPage;
