import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { CharacterSharingService } from 'src/app/services/character-sharing.service';
import { AvailableCharacter, ActiveCharacter } from 'src/models/character';
import { Status, ActionType } from 'src/models/game';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GameService } from 'src/app/services/game.service';
import { EncounterService } from 'src/app/encounter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {
    @ViewChild('statusInput') statusInput: ElementRef<HTMLInputElement>;
    @ViewChild('statusAutocomplete') statusAutocomplete: MatAutocomplete;

    encounterId: number;

    // * For status autocomplete and chiplist
    separatorKeysCodes: number[] = [ENTER];
    statusCtrl = new FormControl();
    filteredStatuses: Observable<Status[]>;
    statuses: Status[] = [];
    allStatuses: Status[] = [];

    actions: ActionType[] = [];
    actionForm: FormGroup;

    // * For character turn order
    characters: ActiveCharacter[];
    step = 0;
    roundsElapsed = 0;
    turnsElapsed = 0;
    timeElapsed = 0;

    constructor(private fb: FormBuilder,
                private selectedCharService: CharacterSharingService,
                private gameService: GameService,
                private encounterService: EncounterService) {

        this.initializeStatuses();
        this.initializeActionTypes();

        this.filteredStatuses = this.statusCtrl.valueChanges.pipe(
            startWith(null),
            map((statusName: string | null) => statusName ? this._filter(statusName) : this.allStatuses.slice()));
    }

    ngOnInit() {
    }

    initializeStatuses() {
        this.gameService.getAllStatuses().subscribe(result => {
            for (let status of result.json()) {
                this.allStatuses.push(status);
            }
        },
            error => {
                console.error(error);
            });
    }

    initializeActionTypes() {
        this.gameService.getAllActionTypes().subscribe(result => {
                for (let actionType of result.json()) {
                    this.actions.push(actionType);
                }
            },
            error => {
                console.error(error);
            });
    }

    initializeCharacters() {
        this.characters = this.selectedCharService.getSelectedAsActive();
        this.encounterService.startEncounter(this.characters);
    }

    endTurn() {

        this.step++;
        this.turnsElapsed++;

        if (this.step == this.characters.length) {
            this.step = 0;
            this.roundsElapsed++;
            this.timeElapsed += 6;
        }
    }

    saveAction() {
        
    }

    // * Methods for handling the status chip list and auto-complete
    // ****
    add(event: MatChipInputEvent): void {
        // Add status only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.statusAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;
            this.addStatus(value, input);
        }
    }

    remove(status: Status): void {
        const index = this.statuses.findIndex(s => s.name.toLowerCase() === status.name.trim().toLowerCase());

        if (index >= 0) {
            this.statuses.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.addStatus(event.option.viewValue, this.statusInput.nativeElement);
    }

    addStatus(value: string, input: HTMLInputElement) {
        if ((value || '').trim()) {
            let found = this.allStatuses.find(s => s.name.toLowerCase() === value.trim().toLowerCase());
            if (found && this.statuses.findIndex(s => s.id === found.id) < 0)
                this.statuses.push(found);
        }

        if (input) {
            input.value = '';
        }

        this.statusCtrl.setValue(null);
    }

    private _filter(name: string): Status[] {
        const filterValue = name.toLowerCase();
        return this.allStatuses.filter(s => s.name.toLowerCase().indexOf(filterValue) === 0);
    }
    // ****
}
