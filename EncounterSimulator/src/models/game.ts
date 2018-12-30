// Describes a status that can be inflicted on a character. e.g. "Stunned", "Grappled"
export class Status {
    id: number;

    name: string;

    description: string;
}

// Describes a type of actions a character can take. e.g. "Attack", "Dash", "Disengage"
export class ActionType {
    id: number;

    name: string;

    description: string;

    unit: string;
}