import { useEffect, useState } from "react";
import { getHeroes } from "../api/heroesApi";
import type { Hero } from "../types/Hero";
import HeroList from "../components/HeroList";
import Searchbar from "../components/Searchbar";
import HeroDetailsModal from "../components/HeroDetailsModal";
import GoldHorizontalLine from "../components/common/GoldHorizontalLine";

const Heroes = () => {
  const [heroesData, setHeroesData] = useState<Hero[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  useEffect(() => {
    const getHeroesData = async () => {
      const data = await getHeroes();
      setHeroesData(data);
    };
    getHeroesData();
  }, []);

  return heroesData ? (
    <div className="bg-main-background min-h-screen">
      <div className="flex flex-col gap-4 pb-8">
        <GoldHorizontalLine className="mt-10" />
        <div className="mb-8">
          <h1 className="text-5xl heading-light mb-2">Heroes</h1>
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
      <HeroList
        heroesData={heroesData}
        searchQuery={searchQuery}
        onHeroSelect={setSelectedHero}
      />
      {selectedHero && (
        <HeroDetailsModal
          hero={selectedHero}
          onClose={() => setSelectedHero(null)}
        />
      )}
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Heroes;
