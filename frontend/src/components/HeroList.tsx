import type { Hero } from "../types/Hero";
import HeroCard from "./HeroCard";

type HeroListProps = {
  heroesData: Hero[];
  searchQuery?: string;
};

const HeroList = ({ heroesData, searchQuery }: HeroListProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2">
      {searchQuery
        ? heroesData
            .filter((hero) =>
              hero.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((hero, index) => <HeroCard key={index} hero={hero} />)
        : heroesData.map((hero, index) => <HeroCard key={index} hero={hero} />)}
    </div>
  );
};

export default HeroList;
