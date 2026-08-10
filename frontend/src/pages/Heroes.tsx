import { useEffect, useState } from "react";
import { getHeroes } from "../api/heroesApi";
import type { Hero } from "../types/Hero";

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
      <div className="flex flex-wrap">
        {heroesData.map((hero) => (
          <img
            src={hero.images.icon_hero_card}
            alt="hero icon card"
            className="w-20 m-2"
          />
        ))}
      </div>
    </div>
  );
};

export default Heroes;
