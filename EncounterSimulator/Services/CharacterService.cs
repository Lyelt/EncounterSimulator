using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EncounterSimulator.Interfaces;
using EncounterSimulator.Models;
using LyeltLogger;
using LyeltDatabaseConnector;

namespace EncounterSimulator.Services
{
    /// <summary>
    ///     Character service for performing CRUD actions on characters in the database. 
    /// </summary>
    public class CharacterService : ICharacterService
    {
        private readonly Logger _log;
        
        public CharacterService(ILoggerService _loggerService)
        {
            _log = _loggerService.GetLogger<CharacterService>();
            DatabaseHelper.DefaultConnectionString = Environment.GetEnvironmentVariable("DefaultConnection") ?? @"Data Source=NICK-HOME-PC;Initial Catalog=Encounter;Integrated Security=True";
        }

        /// <summary>
        ///     Retrieve the characters which are "available" for use in an encounter.
        /// </summary>
        /// <returns>List of available characters</returns>
        public IEnumerable<AvailableCharacter> GetAvailableCharacters(bool getArchived = false)
        {
            var availableCharacters = new List<AvailableCharacter>();

            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand(getArchived ? "spGetArchivedCharacters" : "spGetAvailableCharacters"))
                using (var rdr = cmd.ExecuteReader())
                {
                    while (rdr.Read())
                    {
                        availableCharacters.Add(AvailableCharacter.Create(rdr));
                    }
                }
            }
            catch (Exception ex)
            {
                _log.Error(ex);
            }

            return availableCharacters;
        }

        /// <summary>
        ///     Delete a character from the database.
        /// </summary>
        /// <param name="id">ID of the character to delete</param>
        /// <param name="archive">Whether to archive the character when it is deleted</param>
        /// <returns>The success or failure of the delete operation</returns>
        public bool DeleteCharacter(int id, bool archive = false, bool deleteForever = false)
        {
            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand(archive ? deleteForever ? "spDeleteForever" : "spArchiveCharacter" : "spDeleteCharacter", "@id", id))
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

        /// <summary>
        ///     Save a new character to the database
        /// </summary>
        /// <param name="character">Character to save</param>
        /// <returns>The success or failure of the save operation</returns>
        public bool SaveCharacter(AvailableCharacter character)
        {
            return UpsertCharacter(character, false);
        }

        /// <summary>
        ///     Save multiple new characters to the database
        /// </summary>
        /// <param name="character">Character to save</param>
        /// <returns>The success or failure of the save operation</returns>
        public bool SaveCharacters(List<AvailableCharacter> characters)
        {
            foreach (var character in characters)
            {
                if (!UpsertCharacter(character, false))
                    return false;
            }

            return true;
        }

        /// <summary>
        ///     Update information about an existing character
        /// </summary>
        /// <param name="character">Character to update</param>
        /// <returns>The success or failure of the update operation</returns>
        public bool UpdateCharacter(AvailableCharacter character)
        {
            return UpsertCharacter(character, true);
        }

        /// <summary>
        ///     Restore a character from the archive
        /// </summary>
        /// <param name="id">Character ID to restore</param>
        /// <returns>The success or failure of the restore operation</returns>
        public bool RestoreCharacter(int id)
        {
            try
            {
                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand("spRestoreCharacter", "@id", id))
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

        private bool UpsertCharacter(AvailableCharacter character, bool update)
        {
            try
            {
                var args = new object[] { "@name", character.Name, "@speed", character.Speed, "@ac", character.AC, "@owner", character.Owner == null ? "NPC" : character.Owner, "@maxHP", character.MaxHP, "@dexMod", character.DexModifier };
                if (update)
                    args = args.Append("@id").Append(character.Id).ToArray();

                using (var dbc = DatabaseHelper.GetConnector())
                using (var cmd = dbc.BuildStoredProcedureCommand(update ? "spUpdateCharacter" : "spSaveCharacter", args))
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
