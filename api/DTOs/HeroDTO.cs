using System.Text.Json.Serialization;

namespace api.DTOs
{
    public class HeroDto
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("class_name")]
        public string ClassName { get; set; } = string.Empty;

        [JsonPropertyName("name")]
        public string Name { get; set; } = string.Empty;
    }
}