using FluentValidation;

namespace GraveyardDogs_Backend.ViewModels.Validations
{
    public class RegistrationVmValidator : AbstractValidator<RegistrationVm>
    {
        public RegistrationVmValidator()
        {
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            RuleFor(vm => vm.UserName).NotEmpty().WithMessage("UserName cannot be empty");
        }
    }
}
