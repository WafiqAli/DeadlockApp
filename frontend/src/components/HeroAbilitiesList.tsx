import type { HeroAbility } from "../types/Hero";

type HeroAbilitiesListProps = {
  heroAbilities: HeroAbility[];
  selectedAbility: HeroAbility;
  setSelectedAbility: (ability: HeroAbility) => void;
};

const HeroAbilitiesList = ({
  heroAbilities,
  selectedAbility,
  setSelectedAbility,
}: HeroAbilitiesListProps) => {
  const handleAbilityClick = (ability: HeroAbility) => {
    if (setSelectedAbility) {
      setSelectedAbility(ability);
    }
  };

  return (
    <div className="flex justify-center gap-8">
      {heroAbilities.map((ability, index) => {
        const isActive = selectedAbility.class_name === ability.class_name;

        return (
          <div key={index} onClick={() => handleAbilityClick(ability)}>
            <div
              className={`size-30 rounded-full flex justify-center items-center ${
                isActive ? "bg-black/85" : "bg-offwhite"
              }`}
            >
              <img
                src={ability.image}
                alt={ability.class_name}
                className={`size-[65%] brightness-15 ${
                  isActive ? "invert" : ""
                }`}
              />
            </div>
            <p className="text-center text-sm">{ability.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroAbilitiesList;
