using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PlayerHeroStatsDto
    {
        [JsonPropertyName("account_id")]
        public uint AccountId { get; set; }

        [JsonPropertyName("hero_id")]
        public int HeroId { get; set; }

        [JsonPropertyName("matches_played")]
        public int MatchesPlayed { get; set; }
        public int Wins { get; set; }
        public int Kills { get; set; }
        public int Deaths { get; set; }
        public int Assists { get; set; }

        [JsonPropertyName("total_player_damage")]
        public double TotalPlayerDamage { get; set; }

        [JsonPropertyName("total_player_damage_taken")]
        public double TotalPlayerDamageTaken { get; set; }

        [JsonPropertyName("networth_per_min")]
        public double NetworkPerMin { get; set; }

        [JsonPropertyName("damage_per_min")]
        public double DamagePerMin { get; set; }

    }
}