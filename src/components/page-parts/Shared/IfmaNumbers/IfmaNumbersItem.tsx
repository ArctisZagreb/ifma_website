import { IIfmaNumbersItemData } from "@/types/types";
import React from "react";
import { imageBuilder } from "../../../../../sanity/lib/image";
import Image from "next/image";
export const IfmaNumbersItem: React.FC<{ itemData: IIfmaNumbersItemData }> = ({
  itemData,
}) => {
  const { icon, title, number } = itemData;
  return (
    <div className="flex flex-col items-center   max-w-[230px] gap-[15px] max-lg:mb-[20px] ">
      <Image
        src={imageBuilder.image(icon).width(40).height(40).url()}
        width={40}
        height={40}
        alt="abv"
      />
      <p className="font-bold text-headingMMobile lg:text-headingM ">
        {number}
      </p>
      <span className="small-divider"></span>
      <p className=" text-center uppercase">{title}</p>
    </div>
  );
};
