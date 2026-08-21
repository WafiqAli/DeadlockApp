using System.Text.Json.Serialization;

namespace api.DTOs
{
    public class HeroDto
    {
        // [JsonPropertyName("id")] <- don't need this because .NET can still match id -> Id - due to case insensitive
        public int Id { get; set; }

        [JsonPropertyName("class_name")]
        public string ClassName { get; set; } = string.Empty;

        public string Name { get; set; } = string.Empty;
        public HeroDescriptionDto Description { get; set; } = new();

        [JsonPropertyName("hero_type")]
        public string HeroType { get; set; } = string.Empty;

        public List<string> Tags { get; set; } = [];

        [JsonPropertyName("images")]
        public HeroImagesDto Images { get; set; } = new();

        [JsonPropertyName("items")]
        public HeroItemsDto HeroItems { get; set; } = new();

        public List<HeroAbilityDto> HeroAbilities { get; set; } = new();

        public HeroColorsDto colors { get; set; } = new();
    }

    public class HeroColorsDto
    {
        [JsonPropertyName("style_hex")]
        public string StyleHex { get; set; } = string.Empty;
    }

    public class HeroItemsDto
    {
        public string Signature1 { get; set; } = string.Empty;
        public string Signature2 { get; set; } = string.Empty;
        public string Signature3 { get; set; } = string.Empty;
        public string Signature4 { get; set; } = string.Empty;
    }

}