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
    [Route("api/items")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemsService _itemsService;

        public ItemsController(IItemsService itemsService)
        {
            _itemsService = itemsService;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ItemsDto>>> GetItems(CancellationToken cancellationToken = default)
        {
            {
                var items = await _itemsService.GetItemsAsync(cancellationToken);

                return Ok(items);
            }
        }
    }
}