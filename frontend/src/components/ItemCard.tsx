import { DlItemCard } from "@deadlock-api/ui-react";
import type { Item } from "../types/Item";

type ItemCardProps = {
  item: Item;
};
const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <DlItemCard
      class-name={item.class_name}
      hoverEffect="scale"
      showTierBadge
    ></DlItemCard>
  );
};

export default ItemCard;
