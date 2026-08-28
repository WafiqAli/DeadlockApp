import type { Item } from "../types/Item";
import ItemCard from "./ItemCard";

type ItemListProps = {
  itemsData: Item[];
  searchQuery?: string;
};

const ItemList = ({ itemsData, searchQuery }: ItemListProps) => {
  const filteredItems = searchQuery
    ? itemsData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : itemsData;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-2">
      {filteredItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ItemList;
