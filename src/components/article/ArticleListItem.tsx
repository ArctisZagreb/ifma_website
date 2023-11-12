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
    <li className="article-list-item">
      <TfiArrowCircleRight size={14} className="mt-[4px]" />

      <p
        className={`flex-1 ${
          lastInList ? "" : ` border-b-[1px]  ${borderColor}  pb-[10px]`
        } `}
      >
        {children}
      </p>
    </li>
  );
};

export default ArticleListItem;
