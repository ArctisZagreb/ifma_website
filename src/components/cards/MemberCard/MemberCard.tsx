import React from "react";
import Image from "next/image";
import { IShowcaseMemberCardData } from "@/types/types";
import { imageBuilder } from "../../../../sanity/lib/image";
export const MemberCard = ({
  cardData,
}: {
  cardData: IShowcaseMemberCardData;
}) => {
  const { surname, image, name, role } = cardData;

  return (
    <div className="border-[1px] border-base-300 max-w-[450px] w-full pb-[50px] shadow-sm">
      <Image
        width={450}
        height={450}
        alt={`${name} ${surname}`}
        src={imageBuilder.image(image).width(450).height(450).url()}
        loading="eager"
      />
      <div className="p-[40px] flex flex-col gap-[20px]">
        <p className="uppercase font-semibold">
          {name} {surname}
        </p>
        <p>{role.title}</p>
        <span className="small-divider"></span>
      </div>
    </div>
  );
};
