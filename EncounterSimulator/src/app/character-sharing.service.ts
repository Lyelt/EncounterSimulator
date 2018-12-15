import { Injectable } from '@angular/core';
import { AvailableCharacter } from 'src/models/character';

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
}
