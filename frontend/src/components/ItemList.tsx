import type { Item } from "../types/Item";
import ItemCard from "./ItemCard";

type ItemListProps = {
  itemsData: Item[];
  searchQuery?: string;
};

const ItemList = ({ itemsData, searchQuery }: ItemListProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
      {searchQuery
        ? itemsData
            .filter((item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((item, index) => <ItemCard key={index} item={item} />)
        : itemsData.map((item, index) => <ItemCard key={index} item={item} />)}
    </div>
  );
};
export default ItemList;
