import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CharacterSharingService } from 'src/app/services/character-sharing.service';
import { ActiveCharacter } from 'src/models/character';
import { EncounterService } from 'src/app/services/encounter.service';
import { Action, EncounterData, TimeOfDay } from '../../models/encounter';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {
    @ViewChildren("actionForms") actionForms: QueryList<ActionComponent>;
    encounterData: EncounterData;

    // * For character turn order
    characters: ActiveCharacter[];
    step = 0;
    roundsElapsed = 0;
    turnsElapsed = 0;
    timeElapsed = 0;

    constructor(private selectedCharService: CharacterSharingService,
                private encounterService: EncounterService) {

    }

    ngOnInit() {
    }

    // Get all of the user-selected characters and encounter info to begin
    initializeCharacters() {
        this.characters = this.selectedCharService.getSelectedAsActive();

        let data: EncounterData = new EncounterData();
        data.characters = this.characters;
        data.description = "This is a description of the encounter";
        data.timeOfEncounter = TimeOfDay.Dawn;
        this.encounterService.startEncounter(data).subscribe(result => {
            data.id = result.json();
        });
        this.encounterData = data;
    }

    // Save the current action and move to the next character's turn
    endTurn(): void {
        this.saveAction();

        this.step++;
        this.turnsElapsed++;

        if (this.step == this.characters.length) {
            this.step = 0;
            this.roundsElapsed++;
            this.timeElapsed += 6;
        }
    }

    // Save the current action to the server using the currently-entered form data
    saveAction(): void {
        this.encounterService.saveAction(this.getCurrentAction());
        this.resetForm();
    }

    // Clear the values of all the relevant form controls for this action
    resetForm(): void {
    }

    getCurrentAction(): Action {
        let action: Action = new Action();
        
        return action;
    }

}
