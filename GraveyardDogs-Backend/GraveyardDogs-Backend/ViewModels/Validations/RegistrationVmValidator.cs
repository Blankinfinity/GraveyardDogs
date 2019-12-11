using FluentValidation;

namespace GraveyardDogs_Backend.ViewModels.Validations
{
    public class RegistrationVmValidator : AbstractValidator<RegistrationVm>
    {
        public RegistrationVmValidator()
        {
            RuleFor(vm => vm.Email).NotEmpty().WithMessage("Email cannot be empty");
            RuleFor(vm => vm.Password).NotEmpty().WithMessage("Password cannot be empty");
            RuleFor(vm => vm.FirstName).NotEmpty().WithMessage("FirstName cannot be empty");
            RuleFor(vm => vm.LastName).NotEmpty().WithMessage("LastName cannot be empty");
            RuleFor(vm => vm.Location).NotEmpty().WithMessage("Location cannot be empty");
        }
    }
}
