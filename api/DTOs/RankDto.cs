using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class RankDto
    {
        public required int Tier { get; set; }
        public required string Name { get; set; }
        public required RankImagesDto images { get; set; } = new();
        public required string color { get; set; }
    }

    public class RankImagesDto
    {
        public string? subrank1 { get; set; }
        public string? subrank2 { get; set; }
        public string? subrank3 { get; set; }
        public string? subrank4 { get; set; }
        public string? subrank5 { get; set; }
        public string? subrank6 { get; set; }
    }
}