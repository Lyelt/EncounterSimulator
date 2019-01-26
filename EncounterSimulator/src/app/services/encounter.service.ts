import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action, EncounterData } from 'src/models/encounter';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
    BASE_URL = 'Encounter/';

    constructor(private http: Http) { }

    startEncounter(data: EncounterData) {
        return this.http.post(this.BASE_URL + 'StartEncounter', data);
    }

    saveAction(action: Action) {
        return this.http.post(this.BASE_URL + 'SaveAction', action);
    }
}
