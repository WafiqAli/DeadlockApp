using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PlayerStatsSummaryDto
    {
        public int MatchesPlayed { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public double WinRate { get; set; }

        public double AverageKills { get; set; }
        public double AverageDeaths { get; set; }
        public double AverageAssists { get; set; }
        public double KdaRatio { get; set; }
    }
}