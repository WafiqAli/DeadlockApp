using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Clients;
using api.DTOs;

namespace api.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IDeadlockApiClient _deadlockApiClient;

        public PlayerService(IDeadlockApiClient deadlockApiClient)
        {
            _deadlockApiClient = deadlockApiClient;
        }

        public async Task<IReadOnlyList<SteamProfileDto>> SearchSteamProfilesAsync(string searchQuery, int? limit, CancellationToken cancellationToken)
        {
            var steamProfiles = await _deadlockApiClient.SearchSteamProfilesAsync(searchQuery, limit, cancellationToken);

            return steamProfiles;
        }

        public async Task<PlayerProfileDto> GetPlayerProfile(uint accountId, CancellationToken cancellationToken)
        {
            IReadOnlyList<SteamProfileDto>? steamProfileResponse = await _deadlockApiClient.SearchSteamProfilesAsync(accountId.ToString(), null, cancellationToken);

            if (steamProfileResponse == null || steamProfileResponse.Count == 0)
            {
                throw new InvalidOperationException("steam profile could not be retrieved");

            }

            var playerSteamProfile = steamProfileResponse[0];

            PlayerRankDto? playerRank = await _deadlockApiClient.GetPlayerRankAsync(accountId, cancellationToken);

            if (playerRank == null)
            {
                throw new InvalidOperationException("Player rank could not be retrieved");
            }


            RankDto? rankAsset = await _deadlockApiClient.GetRankAsync(playerRank.Rank, cancellationToken);

            if (rankAsset == null)
            {
                throw new InvalidOperationException("Rank asset could not be retrieved");
            }


            var rankImageUrl = playerRank.Subrank switch
            {
                1 => rankAsset.images.subrank1,
                2 => rankAsset.images.subrank2,
                3 => rankAsset.images.subrank3,
                4 => rankAsset.images.subrank4,
                5 => rankAsset.images.subrank5,
                6 => rankAsset.images.subrank6,
                _ => throw new InvalidOperationException(
                    $"Unexpected player subrank: {playerRank.Subrank}"),
            };

            if (rankImageUrl == null)
            {
                throw new InvalidOperationException("Rank image could not be retrieved.");
            }


            IReadOnlyList<PlayerHeroStatsDto>? playerHeroStats = await _deadlockApiClient.GetPlayerHeroStatsAsync(accountId, cancellationToken);

            if (playerHeroStats == null || playerHeroStats.Count == 0)
            {
                throw new InvalidOperationException("Rank asset could not be retrieved");
            }

            int totalMatchesPlayed = playerHeroStats.Sum(heroStat => heroStat.MatchesPlayed);
            int totalWins = playerHeroStats.Sum(heroStat => heroStat.Wins);
            int totalAssists = playerHeroStats.Sum(heroStat => heroStat.Assists);
            int totalDeaths = playerHeroStats.Sum(heroStats => heroStats.Deaths);

            int totalLosses = totalMatchesPlayed - totalWins;

            double winRate = Math.Round((double)totalWins / totalMatchesPlayed * 100, 1);

            double averageKills = Math.Round((double)playerHeroStats.Sum(heroStats => heroStats.Kills) / totalMatchesPlayed, 1);
            double averageDeaths = Math.Round((double)playerHeroStats.Sum(heroStats => heroStats.Deaths) / totalMatchesPlayed, 1);
            double averageAssists = Math.Round((double)playerHeroStats.Sum(heroStats => heroStats.Assists) / totalMatchesPlayed, 1);
            double kdaRatio = Math.Round((double)(totalWins + totalAssists) / totalDeaths, 2);



            var playerStatsSummary = new PlayerStatsSummaryDto
            {
                MatchesPlayed = totalMatchesPlayed,
                Wins = totalWins,
                Losses = totalLosses,
                WinRate = winRate,
                AverageKills = averageKills,
                AverageDeaths = averageDeaths,
                AverageAssists = averageAssists,
                KdaRatio = kdaRatio,
            };

            var playerRankSummary = new PlayerRankSummaryDto
            {
                PlayerRank = playerRank,
                Name = rankAsset.Name,
                RankImage = rankImageUrl,
            };

            var playerProfile = new PlayerProfileDto
            {
                SteamProfile = playerSteamProfile,
                PlayerRankSummary = playerRankSummary,
                PlayerStatsSummary = playerStatsSummary,
            };


            return playerProfile;
        }
    }
}