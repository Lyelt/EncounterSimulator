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

        public static AvailableCharacter Create(SqlDataReader reader)
        {
            return new AvailableCharacter
            {
                Id = reader.GetInt("Id"),
                Name = reader.GetString("Name"),
                MaxHP = reader.GetInt("MaxHP"),
                AC = reader.GetInt("AC"),
                Speed = reader.GetInt("Speed"),
                Owner = reader.GetString("Owner"),
                DexModifier = reader.GetInt("DexModifier")
            };
        }
    }
}
