using GraveyardDogs_Backend.ViewModels.Validations;
using FluentValidation.Attributes;

namespace GraveyardDogs_Backend.ViewModels
{
    [Validator(typeof(CredentialsVmValidator))]
    public class CredentialsVm
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
