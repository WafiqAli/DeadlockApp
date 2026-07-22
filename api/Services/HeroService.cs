using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Clients;
using api.DTOs;
using api.Services.Interfaces;

namespace api.Services
{
    public class HeroService : IHeroService
    {
        private readonly IDeadlockApiClient _deadlockApiClient;

        public HeroService(IDeadlockApiClient deadlockApiClient)
        {
            _deadlockApiClient = deadlockApiClient;
        }

        public async Task<IReadOnlyList<HeroDto>> GetHeroesAsync(CancellationToken cancellationToken = default)
        {
            var heroes = await _deadlockApiClient.GetHeroesAsync(cancellationToken);

            return heroes
                .OrderBy(hero => hero.Name)
                .ToList();
        }
    }
}