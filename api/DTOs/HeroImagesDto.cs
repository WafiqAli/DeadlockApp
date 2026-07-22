using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class HeroImagesDto
    {
        [JsonPropertyName("icon_hero_card")]
        public string IconHeroCard { get; set; } = string.Empty;

        [JsonPropertyName("icon_image_small")]
        public string IconImageSmall { get; set; } = string.Empty;
    }
}