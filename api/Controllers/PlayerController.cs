using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/player")]
    public class PlayerController : ControllerBase
    {
        private readonly IPlayerService _playerService;

        public PlayerController(IPlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<SteamProfileDto>>> SearchSteamProfiles(string searchQuery, int? limit = 5, CancellationToken cancellationToken = default)
        {
            var steamProfiles = await _playerService.SearchSteamProfileAsync(searchQuery, limit, cancellationToken);

            return Ok(steamProfiles);
        }
    }
}