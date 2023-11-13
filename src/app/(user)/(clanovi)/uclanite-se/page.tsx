import React from "react";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm/ContactForm";
const UclaniteSePage = () => {
  return (
    <div className="container-wide mt-[-30px]">
      <div className="flex justify-center mb-[20px]">
        <Image
          width={1000}
          height={1200}
          alt="diagram clanstva"
          src="/assets/images/clanovi/vrsta-ifma-dijagram-clanstva.avif"
          loading="eager"
        />
      </div>
      <section className="relative">
        <div
          className="absolute top-[-100px]"
          id="contact-form"
          aria-hidden={true}
        ></div>
        <ContactForm formType="clanarina" />
      </section>
    </div>
  );
};

export default UclaniteSePage;
