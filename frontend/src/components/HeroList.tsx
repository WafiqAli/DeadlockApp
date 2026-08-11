import type { Hero } from "../types/Hero";
import HeroCard from "./HeroCard";

type HeroListProps = {
  heroesData: Hero[];
};

const HeroList = ({ heroesData }: HeroListProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {heroesData.map((hero, index) => (
        <HeroCard key={index} hero={hero} />
      ))}
    </div>
  );
};

export default HeroList;
