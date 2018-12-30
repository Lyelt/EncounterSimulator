using LyeltDatabaseConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Models
{
    // **
    // Models for various game mechanics such as action types and character statuses
    // **

    /// <summary>
    /// Describes a status that can be inflicted on a character. e.g. "Stunned", "Grappled"
    /// </summary>
    public class Status
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public static Status Create(System.Data.SqlClient.SqlDataReader rdr)
        {
            return new Status
            {
                Id = rdr.GetInt("Id"),
                Name = rdr.GetString("Name"),
                Description = rdr.GetString("Description")
            };
        }
    }

    /// <summary>
    /// Describes a type of actions a character can take. e.g. "Attack", "Dash", "Disengage"
    /// </summary>
    public class ActionType
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Unit { get; set; }

        public static ActionType Create(System.Data.SqlClient.SqlDataReader rdr)
        {
            return new ActionType
            {
                Id = rdr.GetInt("Id"),
                Name = rdr.GetString("Name"),
                Description = rdr.GetString("Description"),
                Unit = rdr.GetString("Unit")
            };
        }
    }
}
