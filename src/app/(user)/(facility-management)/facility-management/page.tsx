import { PageCard } from "@/components/cards/PageCard/PageCard";
import BecomeMemberBanner from "@/components/page-parts/Shared/BecomeMemberBanner/BecomeMemberBanner";
import { SponsorsList } from "@/components/page-parts/Shared/SponsorsList/SponsorsList";
import { FACILITY_MANAGEMENT_CARDS } from "@/constants";
import React from "react";

const FacilityManagementPage = () => {
  return (
    <>
      <section className="flex flex-col max-lg:items-center lg:flex-row justify-around gap-[50px] lg:gap-[20px] section-mb">
        {" "}
        {FACILITY_MANAGEMENT_CARDS.map((aboutCard) => {
          return <PageCard cardData={aboutCard} key={aboutCard.id} />;
        })}
      </section>
    </>
  );
};

export default FacilityManagementPage;
