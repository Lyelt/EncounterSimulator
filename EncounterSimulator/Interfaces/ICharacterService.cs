using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EncounterSimulator.Models;

namespace EncounterSimulator.Interfaces
{
    public interface ICharacterService
    {
        IEnumerable<AvailableCharacter> GetAvailableCharacters(bool getArchived = false);

        bool DeleteCharacter(int id, bool archive = false, bool deleteForever = false);

        bool SaveCharacter(AvailableCharacter character);

        bool SaveCharacters(List<AvailableCharacter> characters);

        bool UpdateCharacter(AvailableCharacter character);

        bool RestoreCharacter(int id);
    }
}
