import { PageCard } from "@/components/cards/PageCard/PageCard";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import { ABOUT_US_CARDS } from "@/constants";
import React from "react";

const ONamaPage = () => {
  return (
    <>
      <section className="flex flex-col max-lg:items-center lg:flex-row justify-around gap-[50px] lg:gap-[20px] section-mb">
        {" "}
        {ABOUT_US_CARDS.map((aboutCard) => {
          return <PageCard cardData={aboutCard} key={aboutCard.id} />;
        })}
      </section>
      <section className="section-mb">
        <BecomeMemberBanner />
      </section>
      <section className="section-mb">
        <SponsorsList sponsorsType="all" />
      </section>
    </>
  );
};

export default ONamaPage;
