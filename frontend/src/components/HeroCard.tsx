import type { Hero } from "../types/Hero";

type HeroCardProps = {
  hero: Hero;
};

const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div>
      <img
        src={hero.images.icon_hero_card}
        alt="hero icon card"
        className="w-60 border-border border bg-navbar"
      />
      <span>{hero.name}</span>
    </div>
  );
};

export default HeroCard;
