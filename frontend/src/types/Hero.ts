export interface Hero {
  id: number;
  class_name: string;
  name: string;
  description: HeroDescription;
  hero_type: string;
  tags: string[];
  images: HeroImages;
  items: HeroItems;
  hero_abilities: HeroAbility[];
  colors: HeroColors;
}

export interface HeroDescription {
  lore: string;
  role: string;
  playstyle: string;
}

export interface HeroAbility {
  id: number;
  hero: number;
  class_name: string;
  name: string;
  description: HeroAbilityDescription;
  properties: HeroProperties;
  image: string;
}

export interface HeroAbilityDescription {
  desc: string;
}

export interface HeroProperties {
  abilityCooldown: HeroAbilityCooldown;
  abilityDuration: HeroAbilityDuration;
  abilityCastRange: HeroAbilityCastRange;
}

export interface HeroAbilityCooldown {
  value: number | string | null;
}
export interface HeroAbilityDuration {
  value: number | string | null;
}
export interface HeroAbilityCastRange {
  value: number | string | null;
}

export interface HeroItems {
  signature1: string;
  signature2: string;
  signature3: string;
  signature4: string;
}

export interface HeroImages {
  icon_hero_card: string;
  hero_card_gloat: string;
  icon_hero_small: string;
  name_image: string;
}

export interface HeroColors {
  style_hex: string;
}
