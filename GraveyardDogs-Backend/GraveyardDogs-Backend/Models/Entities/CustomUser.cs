using Identity.Dapper.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraveyardDogs_Backend.Models.Entities
{
    public class CustomUser : DapperIdentityUser
    {
        //public string Address { get; set; }

        public CustomUser() { }
        public CustomUser(string userName) : base(userName) { }
    }
}
