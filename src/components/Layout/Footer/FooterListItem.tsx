import { IFooterListItemData } from "@/types/types";

export const FooterListItem = ({
  itemData,
}: {
  itemData: IFooterListItemData;
}) => {
  return (
    <li key={itemData.id}>
      <p className="capitalize mb-[2px]  font-medium">{itemData.title}</p>
      {itemData.values.map((value, i) => {
        return <p key={i}>{value}</p>;
      })}
    </li>
  );
};
