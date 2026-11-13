using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using Microsoft.AspNetCore.WebUtilities;

namespace api.Clients
{
    public class DeadlockApiClient : IDeadlockApiClient
    {
        private readonly HttpClient _httpClient;

        public DeadlockApiClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<HeroDto>> GetHeroesAsync(CancellationToken cancellationToken = default)
        {
            const string endpoint = "/v1/assets/heroes?only_active=true"; // only active returns the heroes that are currently available to play in the live game. 

            var heroesResponse = await _httpClient.GetFromJsonAsync<List<HeroDto>>( // Send GET request -> Check response -> Read response body -> Deserialize JSON into List<HeroDto>
                endpoint,
                cancellationToken
            );

            return heroesResponse ?? new List<HeroDto>(); // if heroes is null then return an empty list of hero data specified by the heroDTO.
        }

        public async Task<List<HeroAbilityDto>> GetHeroesAbilitiesAsync(CancellationToken cancellationToken = default)
        {
            const string endpoint = "/v1/assets/items/by-type/ability"; // only active returns the heroes that are currently available to play in the live game. 

            var abilitiesResponse = await _httpClient.GetFromJsonAsync<List<HeroAbilityDto>>( // Send GET request -> Check response -> Read response body -> Deserialize JSON into List<HeroDto>
                endpoint,
                cancellationToken
            );

            return abilitiesResponse ?? new List<HeroAbilityDto>(); // if heroes is null then return an empty list of hero data specified by the heroDTO.
        }

        public async Task<List<ItemsDto>> GetItemsAsync(CancellationToken cancellationToken = default)
        {
            const string endpoint = "/v1/assets/items";

            var itemsResponse = await _httpClient.GetFromJsonAsync<List<ItemsDto>>(
                endpoint,
                cancellationToken
            );

            return itemsResponse ?? new List<ItemsDto>();
        }

        public async Task<List<SteamProfileDto>> SearchSteamProfilesAsync(string searchQuery, int? limit, CancellationToken cancellationToken = default)
        {
            const string endpoint = "/v1/players/steam-search";

            var queryParameters = new Dictionary<string, string?>
            {
                ["search_query"] = searchQuery
            };

            if (limit.HasValue)
            {
                queryParameters["limit"] = limit.Value.ToString();
            }

            var requestUri = QueryHelpers.AddQueryString(endpoint, queryParameters);

            var steamProfilesResponse = await _httpClient.GetFromJsonAsync<List<SteamProfileDto>>(
                requestUri,
                cancellationToken
            );

            return steamProfilesResponse ?? new List<SteamProfileDto>();
        }

        public async Task<PlayerRankDto?> GetPlayerRankAsync(uint accountId, CancellationToken cancellationToken)
        {
            string endpoint = $"/v1/players/{accountId}/rank";

            var playerRankResponse = await _httpClient.GetFromJsonAsync<PlayerRankDto>(
               endpoint,
               cancellationToken
           );

            return playerRankResponse;
        }

        public async Task<RankDto?> GetRankAsync(int rankTier, CancellationToken cancellationToken)
        {
            string endpoint = $"/v1/assets/ranks/{rankTier}";

            var rankResponse = await _httpClient.GetFromJsonAsync<RankDto>(
               endpoint,
               cancellationToken
           );

            return rankResponse;
        }

        public async Task<List<PlayerHeroStatsDto>?> GetPlayerHeroStatsAsync(uint accountId, CancellationToken cancellationToken)
        {
            string endpoint = $"/v1/players/hero-stats";

            var queryParameters = new Dictionary<string, string?>
            {
                ["account_ids"] = accountId.ToString()
            };

            var requestUri = QueryHelpers.AddQueryString(endpoint, queryParameters);

            var playerHeroStatsResponse = await _httpClient.GetFromJsonAsync<List<PlayerHeroStatsDto>>(
                requestUri,
                cancellationToken
            );

            return playerHeroStatsResponse;
        }

    }
}