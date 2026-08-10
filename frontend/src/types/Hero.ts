import type { HeroDescription } from "./HeroDescription";
import type { HeroImages } from "./HeroImages";

export interface Hero {
  id: number;
  class_name: string;
  name: string;
  description: HeroDescription;
  images: HeroImages;
}
