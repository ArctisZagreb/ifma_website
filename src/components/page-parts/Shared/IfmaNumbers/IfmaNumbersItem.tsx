"use client";
import { IIfmaNumbersItemData } from "@/types/types";
import React, { useEffect, useState } from "react";
import { imageBuilder } from "../../../../../sanity/lib/image";
import Image from "next/image";
import CountUp from "react-countup";
export const IfmaNumbersItem: React.FC<{ itemData: IIfmaNumbersItemData }> = ({
  itemData,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;
  const { icon, title, number } = itemData;
  return (
    <div className="flex flex-col items-center   max-w-[230px] gap-[13px] max-lg:mb-[20px] ">
      <Image
        src={imageBuilder.image(icon).width(55).height(55).url()}
        width={55}
        height={55}
        alt="decorative icon"
      />

      <CountUp
        start={0}
        delay={1}
        end={number}
        onEnd={() => console.log("Ended! 👏", number)}
        onStart={() => console.log("Started! 💨", number)}
      >
        {({ countUpRef }) => (
          <div>
            <span
              ref={countUpRef}
              className="font-bold text-headingMMobile lg:text-headingM "
            />
          </div>
        )}
      </CountUp>
      <span className="small-divider"></span>
      <p className=" text-center uppercase font-medium">{title}</p>
    </div>
  );
};
