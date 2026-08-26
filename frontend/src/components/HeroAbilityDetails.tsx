import type { HeroAbility } from "../types/Hero";
import DOMPurify from "dompurify";

type HeroAbilityDetailsProps = {
  heroAbility: HeroAbility;
};

const HeroAbilityDetails = ({ heroAbility }: HeroAbilityDetailsProps) => {
  console.log(heroAbility.description.desc);

  const safeDescription = DOMPurify.sanitize(heroAbility.description.desc);

  return (
    <div>
      <h1 className="heading-light text-xl">{heroAbility.name}</h1>
      <div
        className="text-md
    leading-relaxed
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
      <ul className="flex justify-between px-10 py-4 border">
        <li>Cooldown: {heroAbility.properties.abilityCooldown.value}s</li>
        <li>Cast Range: {heroAbility.properties.abilityCastRange.value}</li>
        <li>Duration: {heroAbility.properties.abilityDuration.value}s</li>
      </ul>
    </div>
  );
};

export default HeroAbilityDetails;
