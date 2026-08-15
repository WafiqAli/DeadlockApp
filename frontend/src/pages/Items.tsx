import { DlItemCard } from "@deadlock-api/ui-react";
import type { Item } from "../types/Item";
import { getItems } from "../api/itemsApi";
import { useState, useEffect } from "react";

const Items = () => {
  const [itemsData, setItemsData] = useState<Item[]>([]);

  useEffect(() => {
    const getItemsData = async () => {
      const data = await getItems();
      setItemsData(data);
    };
    getItemsData();
  }, []);
  console.log(itemsData);
  return (
    <div className="flex flex-wrap justify-center items-center bg-main-background min-h-screen">
      {itemsData.map((item, index) => (
        <DlItemCard
          key={index}
          class-name={item.class_name}
          hoverEffect="scale"
          showTierBadge
          className="m-2"
        ></DlItemCard>
      ))}
    </div>
  );
};

export default Items;
