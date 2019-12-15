using Identity.Dapper.Entities;

namespace GraveyardDogs_Backend.Models.Entities
{
    public class CustomRole : DapperIdentityRole
    {
        public bool IsDummy { get; set; }

        public CustomRole() { }
        public CustomRole(string roleName) : base(roleName)
        {
        }
    }
}
