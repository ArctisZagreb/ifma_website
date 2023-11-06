import { NAVPATHS } from "@/constants";

import React from "react";
import { NavigationItem } from "./NavigationItem";
import Link from "next/link";
import Image from "next/image";
export const DesktopNavigation = () => {
  return (
    <div className="hidden lg:flex container-wide  items-center justify-between">
      <div>
        <Link href="/" aria-label="homepage">
          <Image
            src="/assets/logos/ifma.avif"
            width={300}
            height={75}
            alt="ifma logo"
          />
        </Link>
      </div>
      <nav className="">
        <ul className="flex  h-full ">
          {NAVPATHS.map((navItem) => {
            return <NavigationItem key={navItem.id} navItem={navItem} />;
          })}
        </ul>
      </nav>
    </div>
  );
};
