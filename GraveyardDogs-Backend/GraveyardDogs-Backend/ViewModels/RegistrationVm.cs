using FluentValidation.Attributes;
using GraveyardDogs_Backend.ViewModels.Validations;

namespace GraveyardDogs_Backend.ViewModels
{
    [Validator(typeof(RegistrationVmValidator))]
    public class RegistrationVm
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Location { get; set; }
    }
}
