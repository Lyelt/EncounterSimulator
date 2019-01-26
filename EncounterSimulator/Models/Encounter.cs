using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Models
{
    public class EncounterData
    {
        public int Id { get; set; } 

        public List<ActiveCharacter> Characters { get; set; }

        public TimeOfDay TimeOfEncounter { get; set; }

        public string Description { get; set; }
    }

    public class Action
    {
        public int CharacterId { get; set; }

        public int TargetCharacterId { get; set; }

        public ActionType ActionType { get; set; }

        public double Value { get; set; }

        public List<Status> InflictedStatuses { get; set; }

        public string FlavorText { get; set; }
    }

    public enum TimeOfDay
    {
        Dawn,
        Morning,
        Afternoon,
        Evening,
        Dusk,
        Night
    }
}
