using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Clients;
using api.DTOs;


namespace api.Services
{
    public class HeroesService : IHeroesService
    {
        private readonly IDeadlockApiClient _deadlockApiClient;

        public HeroesService(IDeadlockApiClient deadlockApiClient)
        {
            _deadlockApiClient = deadlockApiClient;
        }

        public async Task<IReadOnlyList<HeroAbilityDto>> GetHeroesAbilitiesAsync(CancellationToken cancellationToken = default)
        {
            var heroesAbilities = await _deadlockApiClient.GetHeroesAbilitiesAsync(cancellationToken);

            return heroesAbilities
                .OrderBy(heroAbility => heroAbility.Hero)
                .ToList();
        }

        public async Task<IReadOnlyList<HeroDto>> GetHeroesAsync(CancellationToken cancellationToken = default)
        {
            var heroes = await _deadlockApiClient.GetHeroesAsync(cancellationToken);
            var heroesAbilities = await GetHeroesAbilitiesAsync(cancellationToken);


            foreach (var hero in heroes)
            {
                var abilityClassNames = new[]
                {
                    hero.HeroItems.Signature1,
                    hero.HeroItems.Signature2,
                    hero.HeroItems.Signature3,
                    hero.HeroItems.Signature4,
                };

                foreach (string abilityClassName in abilityClassNames)
                {
                    var ability = heroesAbilities.FirstOrDefault(heroAbility => heroAbility.ClassName == abilityClassName);

                    if (ability is not null)
                    {
                        hero.HeroAbilities.Add(ability);
                    }
                }
            }

            return heroes
                .OrderBy(hero => hero.Name)
                .ToList();
        }
    }
}