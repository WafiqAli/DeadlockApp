using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;

namespace api.Clients
{
    public interface IDeadlockApiClient
    {
        Task<List<HeroDto>> GetHeroesAsync(CancellationToken cancellationToken = default);
    }
}