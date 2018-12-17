import { Component, OnInit, ViewChild, Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
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

    title = 'Encounter Simulator';
    dataSource: MatTableDataSource<AvailableCharacter>;
    availableCharacters: AvailableCharacter[];
    columnHeaders = ['select', 'name', 'maxHP', 'ac', 'speed', 'dexModifier', 'actions'];
    selection = new SelectionModel<AvailableCharacter>(true, []);

    constructor(private charService: CharacterService, private selectedCharService: CharacterSharingService, private dialog: MatDialog) {
        this.availableCharacters = [];

        charService.getAvailableCharacters().subscribe(result => {
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

    ngOnInit() {

    }

    sendSelectedCharacters() {
        this.selectedCharService.setSelected(this.selection.selected);
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
        this.dataSource.data = this.availableCharacters;
    }

    openDialog(character: AvailableCharacter) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = character == null ? new AvailableCharacter() : character;

        const dialogRef = this.dialog.open(AddCharacterComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => this.saveCharacter(data));
    }

    saveCharacter(data: any) {
        let character: AvailableCharacter = data.character;
        let quantity: number = data.quantity;

        this.resetSelections();

        let newCharacter = false;
        if (character.id == null) {
            character.id = 0;
            newCharacter = true;
        }

        if (quantity <= 1) {
            this.sendRequest(character, newCharacter);
        }
        else {
            let baseName = character.name;
            for (let i: number = 1; i <= quantity; i++) {
                character.name = baseName + " " + i;
                this.sendRequest(character);
            }
        }
    }

    sendRequest(character: AvailableCharacter, newCharacter: boolean = true) {
        let request: Observable<Object> = newCharacter ? this.charService.saveCharacter(character) : this.charService.updateCharacter(character);

        request.subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                if (newCharacter) {
                    this.availableCharacters.push(character);
                }
                else {
                    const index = this.availableCharacters.findIndex(char => char.id === character.id);
                    this.availableCharacters[index] = character;
                }

                this.refreshData();
            });
    }

    deleteCharacter(id) {
        this.resetSelections();

        this.charService.deleteCharacter(id).subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                const index = this.availableCharacters.findIndex(char => char.id === id);
                this.availableCharacters.splice(index, 1);
                this.refreshData();
            });
    }

    resetSelections() {
        this.selection.clear();
        this.selectedCharService.setSelected(<AvailableCharacter[]>[]);
    }
}