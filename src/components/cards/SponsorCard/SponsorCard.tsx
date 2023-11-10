import { ISponsorData } from "@/types/types";
import React from "react";
import Image from "next/image";
import { imageBuilder } from "../../../../sanity/lib/image";
import Link from "next/link";
export const SponsorCard = ({
  cardData,
}: {
  cardData: ISponsorData | null;
}) => {
  const imageUrl = cardData
    ? imageBuilder.image(cardData.logo).width(360).height(180).url()
    : "/assets/images/partner-placeholder.webp";
  const sponsorName = cardData ? (
    cardData.name
  ) : (
    <Link
      href="/pokrovitelji"
      aria-label="Postani Pokrovitelj"
      className="link-hover"
    >
      Postani Pokrovitelj
    </Link>
  );
  return (
    <div className="w-full max-w-[360px]">
      <Image
        width={360}
        height={180}
        src={imageUrl}
        alt={`${sponsorName} logo`}
        className="w-full h-[200px]"
      />

      <h3 className="mb-[20px] mt-[10px] text-headingSMobile lg:text-headingS block min-h-[60px] uppercase">
        {sponsorName}
      </h3>

      <span className="small-divider"></span>
    </div>
  );
};
