using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Models
{
    public class Encounter
    {
        public int Id { get; set; } 
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
}
