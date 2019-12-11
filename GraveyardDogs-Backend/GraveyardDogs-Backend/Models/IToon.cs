using GraveyardDogs_Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraveyardDogs_Backend.Models
{
    public interface IToon
    {
        string Name { get; set; }
        List<Ability> Abilities { get; set; }
        List<string> Traits { get; set; }
        StarRank StarRank { get; set; }
    }
}
