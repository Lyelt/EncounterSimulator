import { Component, OnInit } from '@angular/core';
import { CharacterSharingService } from 'src/app/character-sharing.service';
import { AvailableCharacter } from 'src/models/character';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
    characters: AvailableCharacter[];

    constructor(private selectedCharService: CharacterSharingService) {

    }

    ngOnInit() {
    }

    initializeCharacters() {
        this.characters = this.selectedCharService.getSelected();
    }

}
