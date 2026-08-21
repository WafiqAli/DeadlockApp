import type { Hero } from "../types/Hero";

type HeroCardProps = {
  hero: Hero;
};

const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div className="relative overflow-hidden  border border-border bg-neutral-900">
      {/* Subtle hero colour behind the portrait */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundColor: hero.colors.style_hex }}
      />

      {/* Glow coming up from the bottom of the card */}
      <div
        className="absolute bottom-[-10%] left-[10%] h-[60%] w-[80%] opacity-70 blur-2xl"
        style={{ backgroundColor: hero.colors.style_hex }}
      />

      <img
        src={hero.images.icon_hero_card}
        alt={hero.name}
        className="relative z-10 w-60"
      />

      <img
        src={hero.images.name_image}
        alt={hero.name}
        className="absolute bottom-[5%] left-[7%] z-20 max-h-[25%] w-[85%] object-contain"
      />
    </div>
  );
};

export default HeroCard;
