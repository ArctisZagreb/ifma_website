import { PageCard } from "@/components/cards/PageCard/PageCard";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import { CLANOVI_CARDS } from "@/constants";
import React from "react";

const PostaniteClanPage = () => {
  return (
    <>
      <section className="container-wide ">
        <div className="flex flex-col max-lg:items-center lg:flex-row justify-around gap-[50px] lg:gap-[20px] section-mb">
          {CLANOVI_CARDS.map((card) => {
            return <PageCard cardData={card} key={card.id} />;
          })}
        </div>
      </section>
      <section className="section-mb container-wide ">
        <BecomeMemberBanner />
      </section>
      <section className="section-mb container-wide ">
        <SponsorsList />
      </section>
    </>
  );
};

export default PostaniteClanPage;
