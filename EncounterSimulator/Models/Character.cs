using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using LyeltDatabaseConnector;

namespace EncounterSimulator.Models
{
    public class AvailableCharacter
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int MaxHP { get; set; }

        public int AC { get; set; }

        public int Speed { get; set; }

        public string Owner { get; set; }

        public int DexModifier { get; set; }

        public AvailableCharacter(int id, string name, int maxHP, int ac, int speed, string owner, int dexMod)
        {
            Id = id;
            Name = name;
            MaxHP = maxHP;
            AC = ac;
            Speed = speed;
            Owner = owner;
            DexModifier = dexMod;
        }

        public AvailableCharacter() { }
    }

    public class ActiveCharacter : AvailableCharacter
    {
        public List<Status> Statuses { get; set; }

        public int CurrentHP { get; set; }
    }
}
