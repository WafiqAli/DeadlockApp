export interface Hero {
  id: number;
  class_name: string;
  name: string;
  description: HeroDescription;
  images: HeroImages;
}

export interface HeroDescription {
  lore: string;
  role: string;
  playstyle: string;
}

export interface HeroImages {
  icon_hero_card: string;
  icon_hero_small: string;
}
