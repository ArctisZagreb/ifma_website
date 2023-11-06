"use client";
import { INavItem } from "@/types/types";
import Link from "next/link";
import React from "react";
export const NavigationSubMenu = ({
  subMenuItems,
}: {
  subMenuItems: INavItem[];
}) => {
  return (
    <ul className="hidden group-hover:flex absolute top-[114px] left-0 border-t-2 border-blue-500 w-[300px]  flex-col opacity-0 shadow-md group-hover:opacity-100 ">
      {subMenuItems.map((childrenLink) => {
        return (
          <li
            key={childrenLink.id}
            className="py-[15px] px-[10px] group/item hover:bg-base-200/40 transition-universal  "
          >
            <Link
              href={childrenLink.path}
              aria-label={childrenLink.text}
              className="block group-hover/item:translate-y-[-2px] group-hover/item:translate-x-[2px] group-hover/item:text-primary duration-300"
            >
              {childrenLink.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
