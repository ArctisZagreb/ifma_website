import Newsletter from "@/components/page-parts/Shared/Newsletter/Newsletter";
import React from "react";
import FooterContent from "./FooterContent";

const Footer = () => {
  return (
    <div className="container-wide">
      <Newsletter />
      <FooterContent />
    </div>
  );
};

export default Footer;
