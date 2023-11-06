import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation/MobileNavigation";

export const Navigation = () => {
  return (
    <header className=" z-10 fixed left-0 top-0 w-full border-b-2 border-base-content/10 bg-base-100">
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};
