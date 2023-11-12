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

export interface IPostCategory {
  title: string;
  slug: {
    current: string;
  };
}
export interface IIfmaNumbersItemData {
  number: number;
  _type: string;
  icon: any;
  _key: string;
  title: string;
}
export type TSponsorsType =
  | "all"
  | "medijski-pokrovitelji"
  | "platinasti-pokrovitelji"
  | "zlatni-pokrovitelji"
  | "sreberni-pokrovitelji";

export interface ISponsorData {
  url: string;
  _type: string;
  name: string;
  logo: ObjectConstructor[];
  _key: string;
}
export interface IFooterListItemData {
  id: number;
  title: string;
  values: string[];
}

export interface IPageCardData {
  id: string;
  title: string;
  path: string;
  image: string;
  text: string;
}
export interface IShowcaseMemberCardData {
  slug: {
    current: string;
    _type: string;
  };
  image: {
    asset: ObjectConstructor[];
    _type: string;
  };
  role: {
    title: string;
  };
  name: string;
  surname: string;
  _id: string;
}
