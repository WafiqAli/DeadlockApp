import type { Item } from "../types/Item";
import { axiosClient } from "./apiClient";

export const getItems = async (): Promise<Item[]> => {
  const response = await axiosClient.get<Item[]>("/items");
  return response.data;
};
