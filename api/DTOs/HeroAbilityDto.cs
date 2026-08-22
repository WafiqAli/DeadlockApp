using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace api.DTOs;

public class HeroAbilityDto
{
    public long Id { get; set; }

    [JsonPropertyName("hero")]
    public int Hero { get; set; }

    [JsonPropertyName("class_name")]
    public string ClassName { get; set; } = string.Empty;

    public string Name { get; set; } = string.Empty;

    public HeroAbilityDescriptionDto Description { get; set; } = new();

    public HeroPropertiesDto properties { get; set; } = new();

    public string Image { get; set; } = string.Empty;
}


public class HeroAbilityDescriptionDto
{
    public string Desc { get; set; } = string.Empty;
}


public class HeroPropertiesDto
{
    public HeroAbilityCooldownDto AbilityCooldown { get; set; } = new();

    public HeroAbilityDurationDto AbilityDuration { get; set; } = new();

    public HeroAbilityCastRangeDto AbilityCastRange { get; set; } = new();
}

public class HeroAbilityCooldownDto
{
    [JsonPropertyName("value")]
    public JsonElement Value { get; set; }

}

public class HeroAbilityDurationDto
{
    [JsonPropertyName("value")]
    public JsonElement Value { get; set; }

}

public class HeroAbilityCastRangeDto
{
    [JsonPropertyName("value")]
    public JsonElement Value { get; set; }
}