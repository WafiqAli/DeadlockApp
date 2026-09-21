import type { HeroAbility } from "../types/Hero";
import DOMPurify from "dompurify";
import GoldHorizontalLine from "./common/GoldHorizontalLine";

type HeroAbilityDetailsProps = {
  heroAbility: HeroAbility;
};

const HeroAbilityDetails = ({ heroAbility }: HeroAbilityDetailsProps) => {
  console.log(heroAbility.description.desc);

  const safeDescription = DOMPurify.sanitize(heroAbility.description.desc);

  return (
    <div className=" bg-offwhite p-4 rounded-2xl border border-border">
      <h1 className="heading-light text-xl">{heroAbility.name}</h1>
      <GoldHorizontalLine className="mt-2 mb-4" />
      <div
        className="
          ability-description
          text-md
          text-primary-dark
          leading-relaxed
          h-24 max-h-24 overflow-y-auto
          [&_svg]:inline
          [&_svg]:h-4
          [&_svg]:w-4
          [&_img]:inline
          [&_img]:h-5
          [&_img]:w-5"
        dangerouslySetInnerHTML={{
          __html: safeDescription,
        }}
      />
      <ul
        className="
        flex 
        justify-between 
        text-primary-dark 
        px-10 
        py-4
        mt-4 
        border
        rounded-xl
        border-border"
      >
        <li>Cooldown: {heroAbility.properties.abilityCooldown.value}s</li>
        <li>Cast Range: {heroAbility.properties.abilityCastRange.value}</li>
        <li>Duration: {heroAbility.properties.abilityDuration.value}s</li>
      </ul>
    </div>
  );
};

export default HeroAbilityDetails;
