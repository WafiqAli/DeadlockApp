import { useEffect, useState } from "react";
import { getHeroes } from "../api/heroesApi";
import type { Hero } from "../types/Hero";
import HeroList from "../components/HeroList";
import Searchbar from "../components/Searchbar";

const Heroes = () => {
  const [heroesData, setHeroesData] = useState<Hero[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const getHeroesData = async () => {
      const data = await getHeroes();
      setHeroesData(data);
    };
    getHeroesData();
  }, []);
  console.log(heroesData);
  return heroesData ? (
    <div className="bg-main-background min-h-screen">
      <div className="flex flex-col gap-4 pb-8">
        <hr className="border-0 h-px bg-linear-to-r from-gold-accent to-transparent mt-10"></hr>
        <div className="mb-8">
          <h1 className="text-4xl font-bold uppercase font-display mb-2">
            Heroes
          </h1>
          <p className="text-common-text">
            There are {heroesData.length} heroes in Deadlock. Browse the
            complete roster
          </p>
        </div>

        <Searchbar
          placeholder="Search heroes..."
          size="md"
          setSearchQuery={setSearchQuery}
        />
        <hr className="border-border mt-2"></hr>
      </div>
      <HeroList heroesData={heroesData} searchQuery={searchQuery} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Heroes;
