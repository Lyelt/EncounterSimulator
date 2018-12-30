import { Component, OnInit, Input } from '@angular/core';
import { AvailableCharacter } from 'src/models/character';
import { CharacterSharingService } from '../services/character-sharing.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})

export class PreparationComponent implements OnInit {
    characters: AvailableCharacter[];


    constructor(private selectedCharService: CharacterSharingService,
                private utilService: UtilsService) {
    }

    ngOnInit() {
    }

    refreshSelectedCharacters() {
        this.characters = this.selectedCharService.getSelected();
    }

    rollAllInitiatives() {
        for (let character of this.characters) {
            this.rollInitiative(character);
        }
    }

    rollInitiative(character: AvailableCharacter) {
        let roll = this.utilService.randomIntFromInterval(1, 20) + character.dexModifier;

        document.getElementById("Initiative" + character.id).setAttribute("value", roll.toString());
        character.initiativeRoll = roll;
    }
}
