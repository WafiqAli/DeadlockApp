using System;
using System.Collections.Generic;
using System.ComponentModel.Design.Serialization;
using System.Linq;
using System.Threading.Tasks;
using api.Clients;
using api.DTOs;


namespace api.Services
{
    public class ItemsService : IItemsService
    {
        private readonly IDeadlockApiClient _deadlockApiClient;

        public ItemsService(IDeadlockApiClient deadlockApiClient)
        {
            _deadlockApiClient = deadlockApiClient;
        }

        public async Task<IReadOnlyList<ItemsDto>> GetItemsAsync(CancellationToken cancellationToken = default)
        {
            var items = await _deadlockApiClient.GetItemsAsync(cancellationToken);

            List<ItemsDto> liveItems = items
                .Where(
                    item => item.Type == "upgrade" &&
                    item.Shopable &&
                    item.Cost > 0)
                    .ToList();

            return liveItems
                .OrderBy(item => item.Cost)
                .ToList();
        }
    }
}