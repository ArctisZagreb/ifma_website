import React from "react";
import { getSponsors } from "../../../../../sanity/lib/queries";
import { SponsorCard } from "@/components/cards/SponsorCard/SponsorCard";
import { ISponsorData } from "@/types/types";
import Button from "@/components/UI/Button";

export const SponsorsList = async () => {
  const sponsors = await getSponsors("all");

  //put all four categories of sponsors to single array
  const allSponsorsCombined = () => {
    const combinedArray = [];
    for (let i = 0; i < sponsors.length; i++) {
      //moze postojati glavni objekt npr za medijske-pokrovitelje,koji nema items array sa sponzorima
      if (sponsors[i].items) {
        for (let j = 0; j < sponsors[i].items.length; j++) {
          combinedArray.push(sponsors[i].items[j]);
        }
      }
    }

    return combinedArray;
  };
  //generate placeholder array
  const generatePlaceholderSponsors = () => {
    const numberOfSponsors = allSponsorsCombined().length;
    const numberOfPlaceholders = 3 - numberOfSponsors;
    let placeholdersArray = [];
    if (numberOfPlaceholders > 0) {
      for (let i = 0; i < numberOfPlaceholders; i++) {
        placeholdersArray.push({});
      }
    }

    return placeholdersArray;
  };
  return (
    <div>
      <h2 className="text-headingMMobile lg:text-headingM text-center mb-[60px]">
        Pokrovitelji
      </h2>
      {sponsors && (
        <div className="flex justify-around flex-col max-lg:items-center max-lg:gap-[20px] lg:flex-row mb-[45px]">
          {allSponsorsCombined().map((sponsor: ISponsorData) => {
            return <SponsorCard key={sponsor._key} cardData={sponsor} />;
          })}
          {allSponsorsCombined().length < 3 &&
            generatePlaceholderSponsors().map((placeholder, i) => {
              return <SponsorCard key={i} cardData={null} />;
            })}
        </div>
      )}
      <div className="text-center">
        <Button path="/pokrovitelji" type="neutral">
          VIŠE O POKROVITELJIMA
        </Button>
      </div>
    </div>
  );
};
