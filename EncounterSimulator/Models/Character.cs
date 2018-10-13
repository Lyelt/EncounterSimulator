using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Models
{
    public class AvailableCharacter
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int MaxHP { get; set; }

        public int AC { get; set; }

        public int Speed { get; set; }
    }
}
