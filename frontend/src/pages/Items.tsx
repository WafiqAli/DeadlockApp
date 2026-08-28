import type { Item } from "../types/Item";
import { getItems } from "../api/itemsApi";
import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import Searchbar from "../components/Searchbar";
import GoldHorizontalLine from "../components/common/GoldHorizontalLine";

const Items = () => {
  const [itemsData, setItemsData] = useState<Item[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getItemsData = async () => {
      const data = await getItems();
      setItemsData(data);
    };
    getItemsData();
  }, []);

  return itemsData ? (
    <div className="min-h-screen">
      <div className="flex flex-col gap-4 pb-8">
        <GoldHorizontalLine className="mt-10" />
        <div className="mb-8">
          <h1 className="heading-light text-5xl mb-2">ITEMS</h1>
          <p className="text-common-text">
            There are currently {itemsData.length} items in Deadlock. Tier 5
            items are only available in the Street Brawl game mode.
          </p>
        </div>

        <Searchbar
          placeholder="Search items..."
          size="md"
          setSearchQuery={setSearchQuery}
        />
        <hr className="border-border mt-2"></hr>
      </div>
      <ItemList itemsData={itemsData} searchQuery={searchQuery} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Items;
