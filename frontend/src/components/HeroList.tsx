import type { Hero } from "../types/Hero";
import HeroCard from "./HeroCard";

type HeroListProps = {
  heroesData: Hero[];
  searchQuery?: string;
  onHeroSelect: (hero: Hero) => void;
};

const HeroList = ({ heroesData, searchQuery, onHeroSelect }: HeroListProps) => {
  const filteredHeroes = searchQuery
    ? heroesData.filter((hero) =>
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : heroesData;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
      {filteredHeroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          onHeroSelect={onHeroSelect}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default HeroList;
