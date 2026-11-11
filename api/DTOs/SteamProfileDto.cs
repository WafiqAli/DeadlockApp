using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs
{
    public class SteamProfileDto
    {
        public int AccountId { get; set; }
        public string PersonaName { get; set; } = string.Empty;
        public string ProfileUrl { get; set; } = string.Empty;
        public string Avatar { get; set; } = string.Empty;
        public string AvatarMedium { get; set; } = string.Empty;
        public string AvatarFull { get; set; } = string.Empty;

    }
}