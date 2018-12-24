export class AvailableCharacter {
    id: number;

    name: string;

    maxHP: number;

    ac: number;

    speed: number;

    owner: string;

    dexModifier: number;

    initiativeRoll: number;

    constructor(character?: AvailableCharacter) {
        if (character && character != null) {
            this.id = character.id;
            this.name = character.name;
            this.maxHP = character.maxHP;
            this.ac = character.ac;
            this.speed = character.speed;
            this.owner = character.owner;
            this.dexModifier = character.dexModifier;
            this.initiativeRoll = character.initiativeRoll;
        }
    }
}

export class ActiveCharacter extends AvailableCharacter {
    statuses: Status[];

    currentHP: number;

    constructor(original: AvailableCharacter) {
        super(original);
        this.statuses = [];
        this.currentHP = this.maxHP;
    }
}

export class Status {
    id: number;

    name: string;

    description: string;

    duration: number;
}

export class Action {
    id: number;

    name: string;

    description: string;
}