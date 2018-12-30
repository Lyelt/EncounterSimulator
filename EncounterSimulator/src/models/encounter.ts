import { Status, ActionType } from "./game";

export class Encounter {

}

// Describes one action that a character can take on their turn
export class Action {
    characterId: number;

    targetCharacterId: number;

    actionType: ActionType;

    value: number;

    inflictedStatuses: Status[];

    flavorText: string;
}
