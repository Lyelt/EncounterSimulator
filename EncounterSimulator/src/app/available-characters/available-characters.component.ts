import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { AddCharacterComponent } from '../add-character/add-character.component';
import { CharacterService } from '../character.service';

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
    columnHeaders = ['select', 'name', 'maxHP', 'ac', 'speed', 'actions'];
    selection = new SelectionModel<AvailableCharacter>(true, []);

    constructor(private charService: CharacterService, private dialog: MatDialog) {
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

    saveCharacter(data: AvailableCharacter) {
        let newCharacter = false;
        if (data.id == null) {
            data.id = 0;
            newCharacter = true;
        }

        let request: Observable<Object> = newCharacter ? this.charService.saveCharacter(data) : this.charService.updateCharacter(data);

        request.subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                if (newCharacter) {
                    this.availableCharacters.push(data);
                }
                else {
                    const index = this.availableCharacters.findIndex(char => char.id === data.id);
                    this.availableCharacters[index] = data;
                }
                
                this.refreshData();
            });
    }

    deleteCharacter(id) {
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
}

export class AvailableCharacter {
    id: number;

    name: string;

    maxHP: number;

    ac: number;

    speed: number;

    owner: string;
}
