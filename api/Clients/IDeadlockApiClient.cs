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
        Task<List<ItemsDto>> GetItemsAsync(CancellationToken cancellationToken = default);
        Task<List<HeroAbilityDto>> GetHeroesAbilitiesAsync(CancellationToken cancellationToken = default);
        Task<List<SteamProfileDto>> SearchSteamProfilesAsync(string searchQuery, int? limit, CancellationToken cancellationToken = default);
        Task<PlayerRankDto?> GetPlayerRankAsync(uint accountId, CancellationToken cancellationToken);
        Task<RankDto?> GetRankAsync(int rankTier, CancellationToken cancellationToken);
        Task<List<PlayerHeroStatsDto>?> GetPlayerHeroStatsAsync(uint accountId, CancellationToken cancellationToken);
    }
}