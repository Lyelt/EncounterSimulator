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
    //[Route("api/[controller]")]
    public class CharacterController : Controller
    {
        private readonly ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        [HttpGet]
        [Route("Character/GetAvailableCharacters")]
        public IActionResult GetAvailableCharacters()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(_characterService.GetAvailableCharacters());
        }

        [HttpDelete("{id}")]
        [Route("Character/DeleteCharacter/{id}")]
        public IActionResult DeleteCharacter(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return _characterService.DeleteCharacter(id) ?
                Ok() as IActionResult :
                BadRequest("Error deleting character") as IActionResult;
        }

        [HttpDelete("{id}")]
        [Route("Character/ArchiveCharacter/{id}")]
        public IActionResult ArchiveCharacter(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return _characterService.DeleteCharacter(id, true) ?
                Ok() as IActionResult :
                BadRequest("Error archiving character") as IActionResult;
        }

        [HttpPost]
        [Route("Character/SaveCharacter")]
        public IActionResult SaveCharacter([FromBody]AvailableCharacter character)
        {
            return _characterService.SaveCharacter(character) ?
                Ok() as IActionResult :
                BadRequest("Error saving character") as IActionResult;
        }

        [HttpPost]
        [Route("Character/SaveCharacters")]
        public IActionResult SaveCharacters([FromBody]List<AvailableCharacter> characters)
        {
            return _characterService.SaveCharacters(characters) ?
                Ok() as IActionResult :
                BadRequest("Error saving characters") as IActionResult;
        }

        [HttpPut]
        [Route("Character/UpdateCharacter")]
        public IActionResult UpdateCharacter([FromBody]AvailableCharacter character)
        {
            return _characterService.UpdateCharacter(character) ?
                Ok() as IActionResult :
                BadRequest("Error updating character") as IActionResult;
        }
    }
}
