using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EncounterSimulator.Interfaces;
using EncounterSimulator.Models;
using LyeltLogger;
using Microsoft.AspNetCore.Mvc;

namespace EncounterSimulator.Controllers
{
    public class EncounterController : Controller
    {
        private readonly IEncounterService _encounterService;

        public EncounterController(IEncounterService encounterService)
        {
            _encounterService = encounterService;
        }

        [HttpPost]
        [Route("Encounter/StartEncounter")]
        public IActionResult StartEncounter(List<ActiveCharacter> characters)
        {
            int encounterId = _encounterService.StartEncounter(characters);
            return encounterId > 0 ?
                Ok(encounterId) as IActionResult :
                BadRequest() as IActionResult;
        }

        [HttpPost]
        [Route("Encounter/SaveAction")]
        public IActionResult SaveAction(Models.Action action)
        {
            return _encounterService.SaveAction(action) ?
                Ok() as IActionResult :
                BadRequest() as IActionResult;
        }
    }
}
