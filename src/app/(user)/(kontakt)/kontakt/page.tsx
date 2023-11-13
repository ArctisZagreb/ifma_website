import { ContactForm } from "@/components/forms/ContactForm/ContactForm";
import React from "react";

const KontaktPage = () => {
  return (
    <section>
      <div className="section-mb">
        <h1 className="text-headingLMobile lg:text-headingL font-medium lg:font-medium ">
          Kontakt
        </h1>
        <span className="small-divider"></span>
      </div>
      <div>
        <ContactForm formType="kontakt" />
      </div>
    </section>
  );
};

export default KontaktPage;
