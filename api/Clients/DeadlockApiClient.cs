using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;

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

        public async Task<List<ItemsDto>> GetItemsAsync(CancellationToken cancellationToken = default)
        {
            const string endpoint = "/v1/assets/items";

            var itemsResponse = await _httpClient.GetFromJsonAsync<List<ItemsDto>>(
                endpoint,
                cancellationToken
            );

            return itemsResponse ?? new List<ItemsDto>();
        }

    }
}