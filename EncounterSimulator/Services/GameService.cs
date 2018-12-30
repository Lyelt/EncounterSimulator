using EncounterSimulator.Interfaces;
using EncounterSimulator.Models;
using LyeltDatabaseConnector;
using LyeltLogger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Services
{
    public class GameService : IGameService
    {
        private readonly Logger _log;

        public GameService(ILoggerService _loggerService)
        {
            _log = _loggerService.GetLogger<GameService>();
            DatabaseHelper.DefaultConnectionString = Environment.GetEnvironmentVariable("DefaultConnection") ?? @"Data Source=NICK-HOME-PC;Initial Catalog=Encounter;Integrated Security=True";
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<ActionType> GetAllActionTypes()
        {
            var actionTypes = new List<ActionType>();

            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand("spGetAllActionTypes"))
                using (var rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        actionTypes.Add(ActionType.Create(rdr));
                    }
                }
            }
            catch (Exception ex)
            {
                _log.Error(ex);
            }

            return actionTypes;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<Status> GetAllStatuses()
        {
            var statuses = new List<Status>();

            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand("spGetAllStatuses"))
                using (var rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        statuses.Add(Status.Create(rdr));
                    }
                }
            }
            catch (Exception ex)
            {
                _log.Error(ex);
            }

            return statuses;
        }
    }
}
