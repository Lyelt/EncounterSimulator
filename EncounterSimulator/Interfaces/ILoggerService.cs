using LyeltLogger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Services
{
    public interface ILoggerService
    {
        Logger GetLogger();

        Logger GetLogger<T>();
    }
}
