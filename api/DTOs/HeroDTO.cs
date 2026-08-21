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

        [JsonPropertyName("images")]
        public HeroImagesDto Images { get; set; } = new();

        public HeroColorsDTO colors { get; set; } = new();
    }

    public class HeroColorsDTO
    {
        [JsonPropertyName("style_hex")]
        public string StyleHex { get; set; } = string.Empty;
    }
}