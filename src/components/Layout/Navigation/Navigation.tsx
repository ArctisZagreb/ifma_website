import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";

export const Navigation = () => {
  return (
    <header className=" z-10 fixed left-0 top-0 w-full border-b-2 border-base-content/10 bg-base-100">
      <div className="container-wide flex items-center justify-between">
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
        <DesktopNavigation />
      </div>
    </header>
  );
};
