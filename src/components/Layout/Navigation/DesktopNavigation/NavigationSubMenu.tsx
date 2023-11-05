import { INavItem } from "@/types/types";
import Link from "next/link";
import React from "react";

export const NavigationSubMenu = ({
  subMenuItems,
}: {
  subMenuItems: INavItem[];
}) => {
  return (
    <ul className="hidden group-hover:flex absolute top-[114px] left-0 border-t-2 border-blue-500 w-[300px]  flex-col opacity-0 shadow-md group-hover:opacity-100  duration-300 transition-all">
      {subMenuItems.map((childrenLink) => {
        return (
          <li key={childrenLink.id} className="py-[10px] px-[10px]">
            <Link href={childrenLink.path} aria-label={childrenLink.text}>
              {childrenLink.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
