"use client";
import { IIfmaNumbersItemData } from "@/types/types";
import React, { useEffect, useState } from "react";
import { imageBuilder } from "../../../../../sanity/lib/image";
import Image from "next/image";
import { useCountUp } from "use-count-up";
export const IfmaNumbersItem: React.FC<{ itemData: IIfmaNumbersItemData }> = ({
  itemData,
}) => {
  const { icon, title, number } = itemData;
  const countValue = useCountUp({
    isCounting: true,
    end: number,
    duration: 5,
  });
  return (
    <div className="flex flex-col items-center   max-w-[230px] gap-[13px] max-lg:mb-[20px] ">
      <Image
        src={imageBuilder.image(icon).width(55).height(55).url()}
        width={55}
        height={55}
        alt="decorative icon"
      />

      <div>
        <span className="font-bold text-headingMMobile lg:text-headingM ">
          {countValue && countValue.value}
        </span>
      </div>
      <span className="small-divider"></span>
      <p className=" text-center uppercase font-medium">{title}</p>
    </div>
  );
};
