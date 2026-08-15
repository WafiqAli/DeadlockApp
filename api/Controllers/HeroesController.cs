using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;
using api.Services;
using Microsoft.AspNetCore.Mvc;


/*
    Notes from the deadlock api website:
    
    API call to get hero abilities: https://api.deadlock-api.com/docs#tag/items/GET/v1/assets/items/by-hero-id/{id}
    API call to get information about the hero - name, images, description of lore: https://api.deadlock-api.com/docs#tag/heroes/GET/v1/assets/heroes/{hero_id}
    
*/
namespace api.Controllers
{
    [ApiController]
    [Route("api/heroes")]
    public class HeroesController : ControllerBase
    {
        private readonly IHeroesService _heroService;

        public HeroesController(IHeroesService heroesService)
        {
            _heroService = heroesService;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<HeroDto>>> GetHeroes(CancellationToken cancellationToken = default)
        {
            var heroes = await _heroService.GetHeroesAsync(cancellationToken);

            return Ok(heroes);
        }
    }
}