using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LyeltLogger;
using Microsoft.AspNetCore.Mvc;

namespace EncounterSimulator.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private static Logger _log;

        static ValuesController()
        {
            LogManager.SetDefaults(new LogOptions(appName: "EncounterSimulator", verbosity: Enums.LogLevel.Debug));
            _log = LogManager.GetLogger<ValuesController>();
            _log.AddLogWriter(new LogFileWriter("ValueControllerWriter", @"C:\LyeltLogs"));
        }

        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok(new string[] { "value3", "value4" });
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok("value");
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]string value)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]string value)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            return Ok();
        }
    }
}
