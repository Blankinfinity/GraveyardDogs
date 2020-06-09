using AutoMapper;
using GraveyardDogs_Backend.Helpers;
using GraveyardDogs_Backend.Models;
using GraveyardDogs_Backend.Models.Entities;
using GraveyardDogs_Backend.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace GraveyardDogs_Backend.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountsController : Controller
    {
        private readonly UserManager<CustomUser> _userManager;
        private readonly SignInManager<CustomUser> _signInManager;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;

        public AccountsController(UserManager<CustomUser> userManager, IMapper mapper,
            SignInManager<CustomUser> signInManager,
            ILoggerFactory loggerFactory)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _logger = loggerFactory.CreateLogger<AccountsController>();
        }

        // POST api/accounts
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody]RegistrationVm model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map<CustomUser>(model);

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            //await _appDbContext.JobSeekers.AddAsync(new JobSeeker { IdentityId = userIdentity.Id, Location = model.Location });
            //await _appDbContext.SaveChangesAsync();

            await _signInManager.SignInAsync(userIdentity, isPersistent: false);
            _logger.LogInformation(3, "User created a new account with password.");

            return new OkObjectResult("Account created");
        }
    }
}
