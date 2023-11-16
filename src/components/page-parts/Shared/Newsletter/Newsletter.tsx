import NewsletterForm from "@/components/forms/NewsletterForm/NewsletterForm";
import React from "react";
import { getNewsletterBanner } from "../../../../../sanity/lib/queries";
import { imageBuilder } from "../../../../../sanity/lib/image";

const Newsletter = async () => {
  const nlData = await getNewsletterBanner();
  return (
    <>
      {nlData ? (
        <div
          style={{
            color: nlData.color,
            backgroundImage: `url(${imageBuilder
              .image(nlData.background)
              .width(1000)
              .height(400)
              .url()})`,
          }}
          className=" w-full flex flex-col items-center bg-no-repeat bg-cover  py-[40px] px-[30px]"
        >
          <div className="flex flex-col items-center gap-[20px] mb-[10px] max-lg:text-center">
            <h2 className="text-headingMMobile lg:text-headingM  ">
              {nlData.title}
            </h2>
            <span className="small-divider"></span>
            <p>{nlData.text}</p>
          </div>
          <NewsletterForm />
        </div>
      ) : (
        <BackupNewsletterBanner />
      )}
    </>
  );
};

export default Newsletter;

const BackupNewsletterBanner = () => (
  <div className=" w-full flex flex-col items-center  newsletter-background py-[40px] px-[30px]">
    <div className="text-base-100 flex flex-col items-center gap-[20px] mb-[10px] max-lg:text-center">
      <h2 className="text-headingMMobile lg:text-headingM  ">Newsletter</h2>
      <span className="small-divider"></span>
      <p>
        Želite li primati sve obavijesti o udruzi IFMA Hrvatska, predbilježite
        se u nastavku na naš Newsletter
      </p>
    </div>
    <NewsletterForm />
  </div>
);
