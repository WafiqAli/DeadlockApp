using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PlayerHeroStatsDto
    {
        public uint AccountId { get; set; }
        public int HeroId { get; set; }
        public int MatchesPlayed { get; set; }
        public int Wins { get; set; }
        public int Kills { get; set; }
        public int Deaths { get; set; }
        public int Assists { get; set; }

        public double TotalPlayerDamage { get; set; }
        public double TotalPlayerDamageTaken { get; set; }
        public double NetworkPerMin { get; set; }
        public double DamagePerMin { get; set; }

    }
}