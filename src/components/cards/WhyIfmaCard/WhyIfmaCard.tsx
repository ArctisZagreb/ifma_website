import { IWhyIfmaCard } from "@/types/types";
import React from "react";
import Image from "next/image";
import { TfiArrowCircleRight } from "react-icons/tfi";
import ArticleListItem from "@/components/article/ArticleListItem";
export const WhyIfmaCard: React.FC<{ cardData: IWhyIfmaCard }> = ({
  cardData,
}) => {
  const { icon, image, title, subtitle, points } = cardData;
  return (
    <div className=" flex flex-col gap-[14px] max-w-[400px]">
      <div className="w-full flex flex-col justify-center items-center gap-[10px]">
        <Image src={icon} alt="decorative icon" width={80} height={80} />
        <h2 className="text-center text-headingSMobile lg:text-headingS font-bold text-primary">
          {title}
        </h2>
      </div>

      <div className="flex flex-col items-center gap-[10px]">
        <Image
          src={image}
          width={400}
          height={200}
          alt="decorative image"
          className="w-full"
        />
        <h3 className="text-headingXSMobile lg:text-headingXS self-start">
          {subtitle}
        </h3>
      </div>
      <span className="small-divider"></span>
      <ul className="p-[10px] ">
        {points.map((point, i) => {
          return (
            <ArticleListItem
              lastInList={i === points.length - 1}
              key={point.id}
            >
              {point.text}
            </ArticleListItem>
          );
        })}
      </ul>
    </div>
  );
};
