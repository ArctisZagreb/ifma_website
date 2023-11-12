import { IResponsobilityCardData } from "@/types/types";
import React from "react";

export const ResponsibilityCard = ({
  cardData,
}: {
  cardData: IResponsobilityCardData;
}) => {
  const { number, items, title, subtitle } = cardData;
  return (
    <div className=" border-[1px] border-base-300 pt-[20px] px-[20px] pb-[40px]">
      <div className="max-w-[400px] w-full flex flex-col items-center gap-[20px]">
        <span className="text-headingL font-normal text-base-300">
          {number}
        </span>
        <h2 className=" font-semibold">{title}</h2>
        <p className="italic text-base-content/90">{subtitle}</p>
        <ul className=" flex flex-col text-center ">
          {items.map((itemData, i) => {
            return (
              <li
                key={itemData.id}
                className="border-b-[1px] border-base-300 py-[10px] last-of-type:border-none"
              >
                {itemData.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
