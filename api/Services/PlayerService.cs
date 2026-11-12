using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Clients;
using api.DTOs;

namespace api.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IDeadlockApiClient _deadlockApiClient;

        public PlayerService(IDeadlockApiClient deadlockApiClient)
        {
            _deadlockApiClient = deadlockApiClient;
        }

        public async Task<IReadOnlyList<SteamProfileDto>> SearchSteamProfilesAsync(string searchQuery, int? limit, CancellationToken cancellationToken)
        {
            var steamProfiles = await _deadlockApiClient.SearchSteamProfilesAsync(searchQuery, limit, cancellationToken);

            return steamProfiles;
        }
    }
}