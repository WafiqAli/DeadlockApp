import { useEffect, useState } from "react";
import { getHeroes } from "../api/heroesApi";
import type { Hero } from "../types/Hero";
import HeroList from "../components/HeroList";

const Heroes = () => {
  const [heroesData, setHeroesData] = useState<Hero[]>([]);

  useEffect(() => {
    const getHeroesData = async () => {
      const data = await getHeroes();
      setHeroesData(data);
    };
    getHeroesData();
  }, []);
  console.log(heroesData);
  return (
    <div className="bg-main-background min-h-screen">
      <HeroList heroesData={heroesData} />
    </div>
  );
};

export default Heroes;
