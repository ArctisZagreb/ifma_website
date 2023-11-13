import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";

const ArticleListItem = ({
  children,
  lastInList = false,
  borderColor = "border-base-300/100",
}: {
  children: React.ReactNode;
  lastInList?: boolean;
  borderColor?: string;
}) => {
  return (
    <li className={`article-list-item ${borderColor} `}>
      <TfiArrowCircleRight size={14} className="mt-[4px]" />

      <p className={`flex-1 `}>{children}</p>
    </li>
  );
};

export default ArticleListItem;
