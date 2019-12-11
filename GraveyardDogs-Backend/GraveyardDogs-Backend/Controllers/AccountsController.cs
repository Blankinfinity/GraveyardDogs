using AutoMapper;
using GraveyardDogs_Backend.Helpers;
using GraveyardDogs_Backend.Models;
using GraveyardDogs_Backend.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace GraveyardDogs_Backend.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;

        public AccountsController(UserManager<AppUser> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationVm model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<AppUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            //await _appDbContext.JobSeekers.AddAsync(new JobSeeker { IdentityId = userIdentity.Id, Location = model.Location });
            //await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }
    }
}
