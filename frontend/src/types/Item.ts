export interface Item {
  id: number;
  class_name: string;
  name: string;
  type: string;
  item_tier: number;
  item_slot_type: string;
  is_active_item: boolean;
  shopable: boolean;
  cost: number;
  shop_image: string;
}
