using AutoMapper;
using GraveyardDogs_Backend.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GraveyardDogs_Backend.ViewModels.Mappings
{
    public class ViewModelToEntityMappingProfile : Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationVm, CustomUser>().ForMember(au => au.UserName, map => map.MapFrom(vm => vm.UserName));
        }
    }
}
