import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ActiveCharacter } from '../models/character';
import { Action } from '../models/encounter';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
    BASE_URL = 'Encounter/';

    constructor(private http: Http) { }

    startEncounter(characters: ActiveCharacter[]) {
        return this.http.post(this.BASE_URL + 'StartEncounter', characters);
    }

    saveAction(action: Action) {
        return this.http.post(this.BASE_URL + 'SaveAction', action);
    }
}
