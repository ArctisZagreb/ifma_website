import AboutUsCard from "@/components/cards/PageCard/PageCard";
import { ABOUT_US_CARDS } from "@/constants";
import React from "react";

const ONamaPage = () => {
  return (
    <div className="">
      <div className="flex flex-col max-lg:items-center lg:flex-row justify-around gap-[50px] lg:gap-[20px]">
        {" "}
        {ABOUT_US_CARDS.map((aboutCard) => {
          return <AboutUsCard cardData={aboutCard} key={aboutCard.id} />;
        })}
      </div>
    </div>
  );
};

export default ONamaPage;
