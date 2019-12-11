using System.Collections.Generic;

namespace GraveyardDogs_Backend.Models.Entities
{
    public class StarRank
    {
        public const int MaxStars = 7;
        public int YellowStars
        {
            get => _yellowStars;
            set
            {
                if (value > MaxStars)
                {
                    _yellowStars = MaxStars;
                }
                else if (value < 1)
                {
                    _yellowStars = 1;
                }
                else
                {
                    _yellowStars = value;
                }
            }
        }
        public int RedStars { get; set; }
        public int CurrentShards { get; set; }
        public int ShardsToNextRank
        {
            get => _shardsToNextRank;
        }
        private int _shardsToNextRank;
        /// <summary>
        /// Level, Shards Required
        /// </summary>
        private readonly Dictionary<int, int> rankSystem;
        private int _yellowStars;

        public StarRank(int yellowStars)
        {
            YellowStars = yellowStars;
            rankSystem = new Dictionary<int, int>
      {
        {1, 15},
        {2, 30},
        {3, 55},
        {4, 80},
        {5, 130},
        {6, 200},
        {7, 300}
      };
            CalculateNextRank();
        }

        // TODO: Create RankUp method or something, which would also call this.
        private void CalculateNextRank()
        {
            _shardsToNextRank = YellowStars < MaxStars ? rankSystem[YellowStars + 1] : 0;
        }
    }
}
