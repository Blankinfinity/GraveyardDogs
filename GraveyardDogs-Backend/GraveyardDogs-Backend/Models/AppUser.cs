using Microsoft.AspNetCore.Identity;

namespace GraveyardDogs_Backend.Models
{
    public class AppUser : IdentityUser
    {
        // Extended Properties
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
