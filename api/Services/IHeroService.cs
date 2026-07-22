using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;

namespace api.Services.Interfaces
{
    public interface IHeroService
    {
        /* IReadOnlyList gives an ordered collection to read but not one that should be modified. 
           This service should pass back the data it retrived from the client to the controller without needing to change anything. 
        */
        Task<IReadOnlyList<HeroDto>> GetHeroesAsync(CancellationToken cancellationToken = default);
    }
}