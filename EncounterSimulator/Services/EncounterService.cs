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
    public class EncounterService : IEncounterService
    {
        private readonly Logger _log;

        public EncounterService(ILoggerService _loggerService)
        {
            _log = _loggerService.GetLogger<EncounterService>();
            DatabaseHelper.DefaultConnectionString = Environment.GetEnvironmentVariable("DefaultConnection") ?? @"Data Source=NICK-HOME-PC;Initial Catalog=Encounter;Integrated Security=True";
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="characters"></param>
        /// <returns></returns>
        public int StartEncounter(List<ActiveCharacter> characters)
        {
            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand("spStartEncounter")) // TODO: Add parameters
                {
                    //return (int)cmd.ExecuteScalar();
                }
            }
            catch (Exception ex)
            {
                _log.Error(ex);
            }

            return 0;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public bool SaveAction(Models.Action action)
        {
            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand("spSaveAction")) // TODO: Add parameters
                {
                    cmd.ExecuteNonQuery();
                }
            }
            catch (Exception ex)
            {
                _log.Error(ex);
                return false;
            }

            return true;
        }
    }
}
