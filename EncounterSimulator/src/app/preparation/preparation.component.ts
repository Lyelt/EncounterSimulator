import { Component, OnInit, Input } from '@angular/core';
import { AvailableCharacter } from 'src/models/character';
import { CharacterSharingService } from '../character-sharing.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})

export class PreparationComponent implements OnInit {
    characters: AvailableCharacter[];


    constructor(private selectedCharService: CharacterSharingService, private utilService: UtilsService) {
    }

    ngOnInit() {
    }

    refreshSelectedCharacters() {
        this.characters = this.selectedCharService.getSelected();
    }

    rollInitiative(dexModifier: number, charId: number) {
        let roll = this.utilService.randomIntFromInterval(1, 20) + dexModifier;

        document.getElementById("Initiative" + charId).setAttribute("value", roll.toString());
    }
}
