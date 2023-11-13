import React from "react";
import { getSponsors } from "../../../../../sanity/lib/queries";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";

const PlatinastiPokroviteljiPage = async () => {
  const platPokrovitelji = await getSponsors("platinasti-pokrovitelji");
  return (
    <section className="section-mb">
      <div className="flex flex-col items-center mb-[60px]">
        <h1 className="text-headingMMobile lg:text-headingM ">
          Platinasti Pokrivitelji
        </h1>
        <span className="small-divider"></span>
      </div>
      <div>
        <SponsorsList sponsorsType="platinasti-pokrovitelji" />
      </div>
    </section>
  );
};

export default PlatinastiPokroviteljiPage;
