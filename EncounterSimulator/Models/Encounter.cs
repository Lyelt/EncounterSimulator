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

        public int TurnsElapsed { get; set; }

        public int RoundsElapsed { get; set; }

        public int SecondsElapsed { get; set; }

        public DateTime StartTime { get; set; }

        public DateTime EndTime { get; set; }

        public EncounterData() { }

        public EncounterData(int id, TimeOfDay timeOfDay, string description, int turnsElapsed, int roundsElapsed, int secondsElapsed, DateTime startTime, DateTime endTime)
        {
            Id = id;
            TimeOfEncounter = timeOfDay;
            Description = description;
            TurnsElapsed = turnsElapsed;
            RoundsElapsed = roundsElapsed;
            SecondsElapsed = secondsElapsed;
            StartTime = startTime;
            EndTime = endTime;
        }
    }

    public class Action
    {
        public int CharacterId { get; set; }

        public int TargetCharacterId { get; set; }

        public ActionType ActionType { get; set; }

        public double Value { get; set; }

        public List<Status> InflictedStatuses { get; set; }

        public string FlavorText { get; set; }

        public int EncounterId { get; set; }
    }

    public enum TimeOfDay
    {
        Unknown,
        Dawn,
        Morning,
        Afternoon,
        Evening,
        Dusk,
        Night
    }
}
