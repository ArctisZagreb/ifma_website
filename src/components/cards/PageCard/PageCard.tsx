import { ABOUT_US_CARDS } from "@/constants";
import { IPageCardData } from "@/types/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const PageCard = ({ cardData }: { cardData: IPageCardData }) => {
  const { image, title, text, path } = cardData;
  return (
    <div className="w-full max-w-[360px]">
      <Link
        href={path}
        aria-label={title}
        className="overflow-hidden block h-[360px] w-full mb-[15px]"
      >
        <Image
          aria-hidden={true}
          width={360}
          height={360}
          src={image}
          alt="decorative image"
          className=" hover:scale-110 transition-universal h-full"
        />
      </Link>
      <div className="flex flex-col gap-[20px]">
        <Link href={path} aria-label={title}>
          <h2 className="text-headingS hover:text-primary transition-universal">
            {title}
          </h2>
        </Link>
        <span className="small-divider"></span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PageCard;