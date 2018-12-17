import { Injectable } from '@angular/core';
import { AvailableCharacter, ActiveCharacter } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterSharingService {
    private selectedCharacters: AvailableCharacter[] = [];

    constructor() {

    }

    setSelected(chars: AvailableCharacter[]) {
        this.selectedCharacters = chars;
    }

    getSelected() {
        return this.selectedCharacters;
    }

    getSelectedAsActive() {
        return this.selectedCharacters.sort((a, b) =>
            // sort based on initiative order
            a.initiativeRoll > b.initiativeRoll ? -1 : 
                a.initiativeRoll < b.initiativeRoll ? 1 :   
                    // if tied, use dex modifier
                    a.dexModifier > b.dexModifier ? -1 :
                        a.dexModifier < b.dexModifier ? 1 :
                            // if still tied, it'll be random
                            0).map(c => new ActiveCharacter(c));
    }
}
