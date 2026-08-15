using System.Text.Json.Serialization;

namespace api.DTOs
{
    public class ItemsDto
    {
        public long Id { get; set; }

        [JsonPropertyName("class_name")]
        public string ClassName { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;

        public string Type { get; set; } = string.Empty;

        [JsonPropertyName("item_tier")]
        public int ItemTier { get; set; }

        [JsonPropertyName("item_slot_type")]
        public string ItemSlotType { get; set; } = string.Empty;

        [JsonPropertyName("is_active_item")]
        public bool IsActiveItem { get; set; }

        public bool Shopable { get; set; }

        public int Cost { get; set; }

        [JsonPropertyName("shop_image")]
        public string ShopImage { get; set; } = string.Empty;

    }
}