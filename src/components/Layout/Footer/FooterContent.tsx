import React from "react";
import Image from "next/image";
import { FOOTER_CONTENT } from "@/constants";
import { FooterListItem } from "./FooterListItem";

const FooterContent = () => {
  const { socials, kontakt, opce } = FOOTER_CONTENT;
  return (
    <footer className="bg-primary p-[50px] text-primary-content flex flex-col max-lg:items-center max-lg:gap-[50px] lg:flex-row gap-[30px] justify-between">
      <div className="max-w-[450px] w-full max-lg:text-center flex flex-col max-lg:items-center">
        <Image
          src="/assets/logos/ifma-white.webp"
          width={300}
          height={200}
          alt="ifma croatia logo"
          className="mb-[10px]"
        />
        <p>
          IFMA Croatia Chapter je hrvatski ogranak međunarodnog udruženja za
          upravljanje resursima i uslugama, s ciljem lokalne i regionalne
          promocije te razvoja profesije Facility Managementa.
        </p>
        <ul className=" flex flex-wrap gap-[8px] mt-[20px]">
          <li>
            <a
              href={socials[0].url}
              className="uppercase text-bodyS link-hover after:bg-primary-content font-semibold"
              target="_blank"
              rel="noreferrer"
              aria-label={socials[0].type}
            >
              {socials[0].type}
            </a>
          </li>
          <li aria-hidden={true}>/</li>
          <li>
            <a
              href={socials[1].url}
              className="uppercase text-bodyS link-hover after:bg-primary-content font-semibold"
              target="_blank"
              rel="noreferrer"
              aria-label={socials[1].type}
            >
              {socials[1].type}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between max-sm:flex-col max-sm:gap-[40px] gap-[20px] max-w-[500px] w-full max-lg:text-center">
        <div className="flex flex-col max-lg:items-center  gap-[20px] w-full">
          <p className=" uppercase font-semibold ">{kontakt.title}</p>
          <span className="small-divider bg-primary-content"></span>
          <ul className=" flex flex-col gap-[20px]">
            {kontakt.items.map((item) => {
              return <FooterListItem key={item.id} itemData={item} />;
            })}
          </ul>
        </div>
        <div className="flex flex-col max-lg:items-center  gap-[20px] w-full">
          <p className=" uppercase font-semibold ">{opce.title}</p>
          <span className="small-divider bg-primary-content"></span>
          <ul className=" flex flex-col gap-[20px]">
            {opce.items.map((item) => {
              return <FooterListItem key={item.id} itemData={item} />;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
