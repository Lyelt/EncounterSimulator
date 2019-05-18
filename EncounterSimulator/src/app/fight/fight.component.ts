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
    @ViewChildren("actionForms") actionFormQuery: QueryList<ActionComponent>;
    actionForms: ActionComponent[] = [];
    encounterData: EncounterData;

    // * For character turn order
    characters: ActiveCharacter[];
    step = 0;

    constructor(private selectedCharService: CharacterSharingService,
                private encounterService: EncounterService) {

    }

    ngOnInit() {
    }

    // Get all of the user-selected characters and encounter info to begin
    initializeCharacters(description: string, timeOfDay: TimeOfDay) {
        this.characters = this.selectedCharService.getSelectedAsActive();

        let data: EncounterData = new EncounterData();
        data.characters = this.characters;
        data.description = description;
        data.timeOfEncounter = timeOfDay;
        this.encounterService.startEncounter(data).subscribe(result => {
            data.id = result.json();
        });
        this.encounterData = data;

        let firstCharacterId = this.characters[0].id;
        this.actionFormQuery.changes.subscribe(query => query.forEach(f => {
            this.actionForms.push(f);
            if (f.characterId == firstCharacterId) {
                f.enable();
            }
        }));
    }

    // Save the current action and move to the next character's turn
    endTurn(): void {
        this.saveAction();
        this.actionForms[this.step].disable();
        this.resetForm();

        this.step++;
        this.encounterData.turnsElapsed++;

        if (this.step == this.characters.length) {
            this.step = 0;
            this.encounterData.roundsElapsed++;
            this.encounterData.secondsElapsed += 6;
        }

        this.actionForms[this.step].enable();
    }

    // Save the current action to the server using the currently-entered form data
    saveAction(): void {
        let action: Action = this.getCurrentAction();
        action.encounterId = this.encounterData.id;
        this.encounterService.saveAction(action).subscribe(() => { }, error => alert(error));
        this.resetForm();
    }

    // Clear the values of all the relevant form controls for this action
    resetForm(): void {
        this.actionForms[this.step].reset();
    }

    getCurrentAction(): Action {
        return this.actionForms[this.step].getAction();
    }

    saveAndEnd(): void {
        this.encounterService.saveAndEnd(this.encounterData).subscribe(() => { }, error => alert(error));
    }

    end(): void {
        this.encounterService.end(this.encounterData).subscribe(() => { }, error => alert(error));
    }
}
