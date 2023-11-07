import { WhyIfmaCard } from "@/components/cards/WhyIfmaCard/WhyIfmaCard";
import { WHY_IFMA_CARDS } from "@/constants";
import React from "react";

export const WhyIfma = () => {
  return (
    <div className="flex flex-col max-lg:gap-[40px] max-lg:items-center lg:flex-row justify-between">
      {WHY_IFMA_CARDS.map((cardData) => {
        return <WhyIfmaCard cardData={cardData} key={cardData.id} />;
      })}
    </div>
  );
};
