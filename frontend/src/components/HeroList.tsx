import type { Hero } from "../types/Hero";
import HeroCard from "./HeroCard";

type HeroListProps = {
  heroesData: Hero[];
  searchQuery?: string;
  onHeroSelect: (hero: Hero) => void;
};

const HeroList = ({ heroesData, searchQuery, onHeroSelect }: HeroListProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
      {searchQuery
        ? heroesData
            .filter((hero) =>
              hero.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((hero, index) => (
              <HeroCard key={index} hero={hero} onHeroSelect={onHeroSelect} />
            ))
        : heroesData.map((hero, index) => (
            <HeroCard key={index} hero={hero} onHeroSelect={onHeroSelect} />
          ))}
    </div>
  );
};

export default HeroList;
