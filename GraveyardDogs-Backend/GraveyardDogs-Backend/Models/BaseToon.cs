using GraveyardDogs_Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraveyardDogs_Backend.Models
{
    public class BaseToon : IToon
    {
        public string Name { get; set; }
        public List<Ability> Abilities { get; set; }
        public List<string> Traits { get; set; }
        public StarRank StarRank { get; set; }

        public BaseToon(string name)
        {
            Name = name;
        }
    }
}
