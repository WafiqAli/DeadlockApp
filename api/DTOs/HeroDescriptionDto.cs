using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class HeroDescriptionDto
    {
        public string Lore { get; set; } = string.Empty;
        public string role { get; set; } = string.Empty;
        public string playstyle { get; set; } = string.Empty;

    }
}