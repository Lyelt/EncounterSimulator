using EncounterSimulator.Interfaces;
using EncounterSimulator.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Services
{
    public static class ServiceExtensions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            services.AddTransient<ICharacterService, CharacterService>();
            services.AddScoped<ILoggerService, LoggerService>();
            return services;
        }
    }
}
