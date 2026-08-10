import type { Hero } from "../types/Hero";
import { axiosClient } from "./apiClient";

export const getHeroes = async (): Promise<Hero[]> => {
  const response = await axiosClient.get<Hero[]>("/heroes");
  return response.data;
};
