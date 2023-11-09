import Button from "@/components/UI/Button";
import React from "react";

const BecomeMemberBanner = () => {
  return (
    <div className="w-full bg-primary text-primary-content text-center flex flex-col items-center py-[50px] gap-[30px]">
      <h2 className=" text-headingMMobile lg:text-headingM">
        Postanite član IFMA-e
      </h2>
      <span className="small-divider bg-base-100"></span>
      <p>
        Učlanite se u najveću svjetsku organizaciju Facility Management
        profesionalaca
      </p>
      <Button type="primary" path="/uclani-se">
        Postanite član
      </Button>
    </div>
  );
};

export default BecomeMemberBanner;
