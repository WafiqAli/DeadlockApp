using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;

namespace api.Services
{
    public interface IPlayerService
    {
        Task<IReadOnlyList<SteamProfileDto>> SearchSteamProfilesAsync(string searchQuery, int? limit, CancellationToken cancellationToken);
    }
}