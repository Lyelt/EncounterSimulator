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
    public class GameController : Controller
    {
        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        [Route("Game/GetAllStatuses")]
        public IActionResult GetAllStatuses()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(_gameService.GetAllStatuses());
        }

        [HttpGet]
        [Route("Game/GetAllActionTypes")]
        public IActionResult GetAllActionTypes()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(_gameService.GetAllActionTypes());
        }
    }
}
