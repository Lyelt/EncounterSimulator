import { Component, OnInit } from '@angular/core';
import { CharacterSharingService } from 'src/app/character-sharing.service';
import { AvailableCharacter, ActiveCharacter } from 'src/models/character';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
    characters: ActiveCharacter[];
    step = 0;

    constructor(private selectedCharService: CharacterSharingService) {

    }

    ngOnInit() {
    }

    initializeCharacters() {
        this.characters = this.selectedCharService.getSelectedAsActive();
    }

    endTurn() {
        this.step++;
        if (this.step == this.characters.length)
            this.step = 0;
    }
}
