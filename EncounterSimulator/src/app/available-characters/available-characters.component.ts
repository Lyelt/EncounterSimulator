import { Component, OnInit, ViewChild, Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, from } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AddCharacterComponent } from '../add-character/add-character.component';
import { CharacterService } from '../character.service';
import { AvailableCharacter } from 'src/models/character';
import { CharacterSharingService } from '../character-sharing.service';

@Component({
  selector: 'app-available-characters',
  templateUrl: './available-characters.component.html',
  styleUrls: ['./available-characters.component.css']
})
    
export class AvailableCharactersComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    dataSource: MatTableDataSource<AvailableCharacter>;
    availableCharacters: AvailableCharacter[];
    columnHeaders = ['select', 'name', 'maxHP', 'ac', 'speed', 'dexModifier', 'actions'];
    selection = new SelectionModel<AvailableCharacter>(true, []);

    constructor(private charService: CharacterService, private selectedCharService: CharacterSharingService, private dialog: MatDialog) {
        this.refreshData();
    }

    ngOnInit() {

    }

    sendSelectedCharacters() {
        this.selectedCharService.setSelected(this.selection.selected);
    }

    restart() {
        this.resetSelections();
        this.refreshData();
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    
    refreshData() {
        this.availableCharacters = [];
        this.charService.getAvailableCharacters().subscribe(result => {
            for (let character of result.json()) {
                this.availableCharacters.push(character);
            }
        },
        error => {
            console.error(error);
        },
        () => {
            this.dataSource = new MatTableDataSource(this.availableCharacters);
            this.dataSource.sort = this.sort;
        });
    }

    openDialog(character: AvailableCharacter) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = character == null ? new AvailableCharacter() : character;

        const dialogRef = this.dialog.open(AddCharacterComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => this.saveCharacter(data));
    }

    // The user clicked save and we have all of the form data available
    saveCharacter(data: any) {
        let character: AvailableCharacter = data.character;
        const newCharacter = character.id == null;  // If no ID, we know the character doesn't exist yet
        const baseName = character.name;            // In case we need to enumerate the name

        if (newCharacter)
            character.id = 0;

        // Clear any currently selected characters from the table
        this.resetSelections();

        let characters: AvailableCharacter[] = [];
        for (let i: number = 1; i <= data.quantity; i++) {
            if (data.quantity <= 1) {
                characters.push(character);
            }
            else {
                // Make a shallow copy of the character and give it a new name
                let newCharacter: AvailableCharacter = Object.assign(new AvailableCharacter(), character);
                newCharacter.name = baseName + " " + i;
                characters.push(newCharacter);
            }
        }

        let request: Observable<Object> = newCharacter ? this.charService.saveCharacters(characters) : this.charService.updateCharacter(characters[0]);
        request.subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            }
        );
    }

    deleteCharacter(id) {
        this.resetSelections();

        this.charService.deleteCharacter(id).subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            });
    }

    resetSelections() {
        this.selection.clear();
        this.selectedCharService.setSelected(<AvailableCharacter[]>[]);
    }
}