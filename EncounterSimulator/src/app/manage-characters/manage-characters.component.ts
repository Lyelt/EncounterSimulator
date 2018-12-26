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
  selector: 'app-manage-characters',
  templateUrl: './manage-characters.component.html',
  styleUrls: ['./manage-characters.component.scss']
})
export class ManageCharactersComponent implements OnInit {
    @ViewChild(MatSort) sort: MatSort;
    availableCharacterSource: MatTableDataSource<AvailableCharacter>;
    availableCharacters: AvailableCharacter[];
    availableCharacterHeaders = ['actions', 'name', 'maxHP', 'ac', 'speed', 'dexModifier'];

    archivedCharacterSource: MatTableDataSource<AvailableCharacter>;
    archivedCharacters: AvailableCharacter[];
    archivedCharacterHeaders = ['actions', 'name'];

    showArchived = false;

    constructor(private charService: CharacterService, private dialog: MatDialog) {
        this.refreshData();
    }

    ngOnInit() {

    }

    refreshData() {
        this.availableCharacters = [];
        this.archivedCharacters = [];

        this.charService.getAvailableCharacters().subscribe(
            result => {
                for (let character of result.json()) {
                    this.availableCharacters.push(character);
                }
            },
            error => {
                console.error(error);
            },
            () => {
                this.availableCharacterSource = new MatTableDataSource(this.availableCharacters);
                this.availableCharacterSource.sort = this.sort;
            });

        this.charService.getArchivedCharacters().subscribe(
            result => {
                for (let character of result.json()) {
                    this.archivedCharacters.push(character);
                }
            },
            error => {
                console.error(error);
            },
            () => {
                this.archivedCharacterSource = new MatTableDataSource(this.archivedCharacters);
            });
    }

    openDialog(character: AvailableCharacter) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = character == null ? new AvailableCharacter() : character;

        const dialogRef = this.dialog.open(AddCharacterComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => {
            if (data)
                this.saveCharacter(data)
        });
    }

    // The user clicked save and we have all of the form data available
    saveCharacter(data: any) {
        let character: AvailableCharacter = data.character;
        const newCharacter = character.id == null;  // If no ID, we know the character doesn't exist yet
        const baseName = character.name;            // In case we need to enumerate the name

        if (newCharacter)
            character.id = 0;
        
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

    deleteCharacter(id, archive = false) {
        let request = archive ? this.charService.archiveCharacter(id) : this.charService.deleteCharacter(id);
        request.subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            });
    }

    deleteForever(id) {
        this.charService.deleteForever(id).subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            });
    }

    restore(id) {
        this.charService.restoreCharacter(id).subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            });
    }
}
