import { type HeroAbility, type Hero } from "../types/Hero";
import { useEffect, useRef, useState } from "react";
import HeroAbilitiesList from "./HeroAbilitiesList";
import HeroAbilityDetails from "./HeroAbilityDetails";
import HeroCard from "./HeroCard";

/* 

Note: The dialog component uses something called "clip-path". I am using this 
because without it, the hero card image had a slight white on the top left corner. 
Most likely due to browser anti-aliasing so therefore intentionally clipping over it
so that the card is cleanly aligned to the top left of the model

*/

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
      relative
      m-auto 
      w-full 
      max-w-4xl
      overflow-hidden
      rounded-xl  
      [clip-path:inset(0_round_1rem)]
      bg-main-background
      text-common-text 
      backdrop:bg-black/75
      backdrop:backdrop-blur-sm"
    >
      <div className="flex border-b border-border ">
        {/* <img
          className="w-50"
          src={hero.images.icon_hero_card}
          alt={hero.class_name}
        /> */}
        <HeroCard hero={hero} className="w-52 border-0" />
        <div className="flex-1 px-6 py-4">
          <h1 className="heading-light text-4xl py-2">{hero.name}</h1>
          <div className="text-primary-dark flex gap-2 pb-4">
            {hero.tags.map((tag) => {
              return (
                <span
                  className="
                  text-xs 
                  font-bold 
                  py-1 
                  px-3 
                  border 
                  border-border 
                  rounded"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <h3 className="text-common-text">{hero.description.lore}</h3>
        </div>
      </div>
      <div className="p-4">
        <h2 className="heading-light text-2xl">Abilities</h2>
        <HeroAbilitiesList
          heroAbilities={hero.hero_abilities}
          selectedAbility={selectedAbility}
          setSelectedAbility={setSelectedAbility}
        />
        <HeroAbilityDetails heroAbility={selectedAbility} />
      </div>
      <button
        className="
        absolute
        top-3
        right-3
        z-50
        size-10
        border
        border-border 
        rounded-full
        bg-offwhite
        text-xl
        text-common-text
        transition
        hover:bg-black"
        onClick={() => dialogRef.current?.close()}
      >
        x
      </button>
    </dialog>
  );
};

export default HeroDetailsModal;
