import React from "react";
import { getBanner } from "../../../../../sanity/lib/queries";
import { IfmaNumbersItem } from "./IfmaNumbersItem";
import { IIfmaNumbersItemData } from "@/types/types";
import { imageBuilder } from "../../../../../sanity/lib/image";

const IfmaNumbers = async () => {
  const banner = await getBanner();

  return (
    <>
      {banner && (
        <div
          style={{
            color: banner.color,
            background: `url(${imageBuilder
              .image(banner.background)
              .width(1000)
              .height(400)
              .url()}) no-repeat`,
            backgroundSize: "cover",
          }}
          className="w-full  px-[15px] py-[40px] "
        >
          <h1
            className={` text-center text-headingMMobile lg:text-headingM mb-[30px]`}
          >
            {banner.title}
          </h1>

          <div className="banner-grid   ">
            {banner.items.map((item: IIfmaNumbersItemData) => {
              return <IfmaNumbersItem itemData={item} key={item._key} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default IfmaNumbers;
