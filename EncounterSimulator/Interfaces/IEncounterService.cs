﻿using EncounterSimulator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Interfaces
{
    public interface IEncounterService
    {
        int StartEncounter(List<ActiveCharacter> characters);

        bool SaveAction(Models.Action action);
    }
}
