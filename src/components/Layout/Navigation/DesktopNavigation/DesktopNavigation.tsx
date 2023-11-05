import { NAVPATHS } from "@/constants";

import React from "react";
import { NavigationItem } from "./NavigationItem";

export const DesktopNavigation = () => {
  return (
    <nav>
      <ul className="flex  h-full ">
        {NAVPATHS.map((navItem) => {
          return <NavigationItem key={navItem.id} navItem={navItem} />;
        })}
      </ul>
    </nav>
  );
};
