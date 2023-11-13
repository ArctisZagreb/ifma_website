import { INavItem } from "@/types/types";
import Link from "next/link";
import React from "react";
import { NavigationSubMenu } from "./NavigationSubMenu";

export const NavigationItem = ({ navItem }: { navItem: INavItem }) => {
  return (
    <li
      key={navItem.id}
      className="uppercase text-nav group relative px-[10px] py-[50px]  "
    >
      <Link
        href={navItem.path}
        className="group-hover:text-primary cursor-pointer py-[20px]"
      >
        {navItem.text}
      </Link>
      {navItem.children.length > 0 && (
        <NavigationSubMenu subMenuItems={navItem.children} />
      )}
    </li>
  );
};
