import { INavItem } from "@/types/types";
import Link from "next/link";
import React from "react";
import { NavigationSubMenu } from "./NavigationSubMenu";

export const NavigationItem = ({ navItem }: { navItem: INavItem }) => {
  return (
    <li
      key={navItem.id}
      className="uppercase text-nav group relative px-[12px] py-[50px] cursor-pointer "
    >
      <Link href={navItem.path} className="group-hover:text-primary">
        {navItem.text}
      </Link>
      {navItem.children.length > 0 && (
        <NavigationSubMenu subMenuItems={navItem.children} />
      )}
    </li>
  );
};
