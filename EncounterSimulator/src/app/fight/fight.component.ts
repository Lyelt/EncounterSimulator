import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { CharacterSharingService } from 'src/app/character-sharing.service';
import { AvailableCharacter, ActiveCharacter, Status } from 'src/models/character';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StatusService } from 'src/app/status.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {
    @ViewChild('statusInput') statusInput: ElementRef<HTMLInputElement>;
    @ViewChild('statusAutocomplete') statusAutocomplete: MatAutocomplete;

    // * For status autocomplete and chiplist
    separatorKeysCodes: number[] = [ENTER];
    statusCtrl = new FormControl();
    filteredStatuses: Observable<Status[]>;
    statuses: Status[] = [];
    allStatuses: Status[] = [];

    // * For character turn order
    characters: ActiveCharacter[];
    step = 0;
    roundsElapsed = 0;
    turnsElapsed = 0;
    timeElapsed = 0;

    constructor(private selectedCharService: CharacterSharingService, private statusService: StatusService) {
        this.allStatuses = statusService.getStatuses();

        this.filteredStatuses = this.statusCtrl.valueChanges.pipe(
            startWith(null),
            map((statusName: string | null) => statusName ? this._filter(statusName) : this.allStatuses.slice()));
    }

    ngOnInit() {
    }

    initializeCharacters() {
        this.characters = this.selectedCharService.getSelectedAsActive();
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

    // * Methods for handling the status chip list and auto-complete
    // ****
    add(event: MatChipInputEvent): void {
        // Add status only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.statusAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;

            // Add our status
            if ((value || '').trim()) {
                this.statuses.push(this.allStatuses.find(s => s.name.toLowerCase() === value.trim().toLowerCase()));
            }

            // Reset the input value
            if (input) {
                input.value = '';
            }

            this.statusCtrl.setValue(null);
        }
    }

    remove(status: Status): void {
        const index = this.statuses.findIndex(s => s.name.toLowerCase() === status.name.trim().toLowerCase());

        if (index >= 0) {
            this.statuses.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.statuses.push(this.allStatuses.find(s => s.name.toLowerCase() === event.option.viewValue.trim().toLowerCase()));
        this.statusInput.nativeElement.value = '';
        this.statusCtrl.setValue(null);
    }

    private _filter(name: string): Status[] {
        const filterValue = name.toLowerCase();
        return this.allStatuses.filter(s => s.name.toLowerCase().indexOf(filterValue) === 0);
    }
    // ****
}
