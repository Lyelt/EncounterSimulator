﻿using EncounterSimulator.Services;
using LyeltLogger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EncounterSimulator.Services
{
    public class LoggerService : ILoggerService
    {
        static LoggerService()
        {
            LogManager.SetDefaults(new LogOptions(appName: "EncounterSimulator", verbosity: Enums.LogLevel.Debug));
        }

        public Logger GetLogger()
        {
            var log = LogManager.GetGlobalLogger();
            log.AddLogWriter(new LogFileWriter("GlobalWriter", @"LyeltLogs"));
            return log;
        }

        public Logger GetLogger<T>()
        {
            LogManager.SetDefaults(new LogOptions { SynchronousLogging = true, Verbosity = Enums.LogLevel.Debug });
            var log = LogManager.GetLogger<T>();
            log.AddLogWriter(new LogFileWriter(string.Concat(nameof(T), "Writer"), @"C:\LyeltLogs"));
            return log;
        }
    }
}
