using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class PlayerRankSummaryDto
    {
        public required PlayerRankDto PlayerRank { get; set; } = new();
        public required string Name { get; set; }
        public required string RankImage { get; set; }
    }
}