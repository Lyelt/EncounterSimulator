using EncounterSimulator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Interfaces
{
    public interface IGameService
    {
        List<ActionType> GetAllActionTypes();

        List<Status> GetAllStatuses();
    }
}
