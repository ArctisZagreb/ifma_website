import NewsletterForm from "@/components/forms/NewsletterForm/NewsletterForm";
import React from "react";

const Newsletter = () => {
  return (
    <div className=" w-full flex flex-col items-center  newsletter-background py-[30px] px-[20px]">
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
};

export default Newsletter;
