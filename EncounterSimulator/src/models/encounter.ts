﻿import { Status, ActionType } from "./game";
import { ActiveCharacter } from "./character";

export class EncounterData {
    id: number;

    characters: ActiveCharacter[];

    timeOfEncounter: TimeOfDay;

    description: string;

    roundsElapsed: number = 0;

    turnsElapsed: number = 0;

    secondsElapsed: number = 0;

    startTime: Date;

    endTime: Date;
}

// Describes one action that a character can take on their turn
export class Action {
    characterId: number;

    targetCharacterId: number;

    encounterId: number;

    actionType: ActionType;

    value: number;

    inflictedStatuses: Status[];

    flavorText: string;
}

export enum TimeOfDay {
    Dawn,
    Morning,
    Afternoon,
    Evening,
    Dusk,
    Night
}