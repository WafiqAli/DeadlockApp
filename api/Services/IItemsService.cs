using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.DTOs;

namespace api.Services
{
    public interface IItemsService
    {
        Task<IReadOnlyList<ItemsDto>> GetItemsAsync(CancellationToken cancellationToken = default);
    }
}