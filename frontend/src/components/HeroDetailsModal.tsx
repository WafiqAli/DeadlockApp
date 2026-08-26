import { type HeroAbility, type Hero } from "../types/Hero";
import { useEffect, useRef, useState } from "react";
import HeroAbilitiesList from "./HeroAbilitiesList";
import HeroAbilityDetails from "./HeroAbilityDetails";

type HeroDetailsModalProps = {
  hero: Hero;
  onClose: () => void;
};

const HeroDetailsModal = ({ hero, onClose }: HeroDetailsModalProps) => {
  const [selectedAbility, setSelectedAbility] = useState<HeroAbility>(
    hero.hero_abilities[0],
  );

  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="
      m-auto 
      w-full 
      max-w-4xl 
      rounded-xl 
      bg-main-background
      text-common-text 
      backdrop:bg-black/75
      backdrop:backdrop-blur-sm"
    >
      <div className="flex p-3">
        <img
          className="w-50"
          src={hero.images.icon_hero_card}
          alt={hero.class_name}
        />
        <div>
          <h1 className="heading-light text-4xl mb-2">{hero.name}</h1>
          <div className="flex gap-2">
            <h4>TANK</h4>
            <h4>INITIATOR</h4>
          </div>
          <h3 className="text-common-text">{hero.description.playstyle}</h3>
        </div>
      </div>
      <hr className="border-border mt-2"></hr>
      <h2 className="heading-light text-2xl">Abilities</h2>
      <HeroAbilitiesList
        heroAbilities={hero.hero_abilities}
        selectedAbility={selectedAbility}
        setSelectedAbility={setSelectedAbility}
      />
      <HeroAbilityDetails heroAbility={selectedAbility} />
      <button onClick={() => dialogRef.current?.close()}>Close</button>
    </dialog>
  );
};

export default HeroDetailsModal;
