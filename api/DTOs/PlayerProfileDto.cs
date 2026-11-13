using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PlayerProfileDto
    {
        public required SteamProfileDto SteamProfile { get; set; }

        public required PlayerRankSummaryDto PlayerRankSummary { get; set; }

        public required PlayerStatsSummaryDto PlayerStatsSummary { get; set; }
    }
}