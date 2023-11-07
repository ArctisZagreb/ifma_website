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

export interface IWhyIfmaCard {
  icon: string;
  image: string;
  id: number;
  title: string;
  subtitle: string;
  points: {
    id: number;
    text: string;
  }[];
}
