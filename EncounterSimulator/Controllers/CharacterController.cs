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
    [Route("api/[controller]")]
    public class CharacterController : Controller
    {
        private readonly ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet]
        public IActionResult GetAvailableCharacters()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(_characterService.GetAvailableCharacters());
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCharacter(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return _characterService.DeleteCharacter(id) ?
                Ok() as IActionResult :
                BadRequest("Error deleting character") as IActionResult;
        }

        [HttpPost]
        public IActionResult SaveCharacter([FromBody]AvailableCharacter character)
        {
            return _characterService.SaveCharacter(character) ?
                Ok() as IActionResult :
                BadRequest("Error saving character") as IActionResult;
        }

        [HttpPut]
        public IActionResult UpdateCharacter([FromBody]AvailableCharacter character)
        {
            return _characterService.UpdateCharacter(character) ?
                Ok() as IActionResult :
                BadRequest("Error updating character") as IActionResult;
        }
    }
}
