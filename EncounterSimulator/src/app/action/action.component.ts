import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { ActiveCharacter } from 'src/models/character';
import { GameService } from 'src/app/services/game.service';
import { Status, ActionType } from 'src/models/game';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { CharacterSharingService } from 'src/app/services/character-sharing.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Action } from '../../models/encounter';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
    @Input() character: ActiveCharacter;
    @ViewChild('statusInput') statusInput: ElementRef<HTMLInputElement>;
    @ViewChild('statusAutocomplete') statusAutocomplete: MatAutocomplete;

    separatorKeysCodes: number[] = [ENTER];
    allActionTypes: ActionType[];
    characters: ActiveCharacter[];
    filteredStatuses: Observable<Status[]>;
    form: FormGroup;
    statusCtrl = new FormControl();
    statuses: Status[] = [];
    allStatuses: Status[];

    characterId: number;

    constructor(private gameService: GameService,
                private sharingService: CharacterSharingService,
                private fb: FormBuilder) {
        this.filteredStatuses = this.statusCtrl.valueChanges.pipe(
            startWith(null),
            map((statusName: string | null) => statusName ? this._filter(statusName) : this.allStatuses.slice()));

        this.allStatuses = gameService.getAllStatuses();
        this.allActionTypes = gameService.getAllActionTypes();
        this.characters = sharingService.getSelectedAsActive();
    }

    ngOnInit() {
        this.characterId = this.character.id;
        this.form = this.fb.group({
            actionType: [],
            target: [],
            value: [],
            statuses: [],
            flavor: []
        });

        this.disable(); // Default to a disabled state
    }

    // Return an action as defined by the form's current state
    getAction(): Action {
        let action: Action = new Action();
        action.characterId = this.character.id;
        action.actionType = this.form.get("actionType").value;
        action.flavorText = this.form.get("flavor").value;
        action.targetCharacterId = this.form.get("target").value == null ? 0 : this.form.get("target").value;
        action.value = this.form.get("value").value == null ? 0 : this.form.get("value").value;
        //action.inflictedStatuses = this.form.get("statuses").value;
        action.inflictedStatuses = [];
        return action;
    }

    // * Methods for controlling the state of the form
    enable() {
        this.form.enable();
    }

    disable() {
        this.form.disable();
    }

    reset() {
        this.form.reset();
    }

    // * Methods for handling the status chip list and auto-complete
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
}
