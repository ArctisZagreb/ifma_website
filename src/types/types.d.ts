import { ReactNode } from "react";
export interface INavItem {
  id: number;
  text: string;
  path: string;
  children: INavItem[];
}

export interface IComponentWithChildren {
  children: ReactNode;
}
