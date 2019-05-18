import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action, EncounterData } from 'src/models/encounter';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
    BASE_URL = 'Encounter/';

    constructor(private http: Http) { }

    getEncounters() {
        return this.http.get(this.BASE_URL + 'GetEncounters');
    }

    deleteEncounter(id: number) {
        return this.http.delete(this.BASE_URL + 'DeleteEncounter/' + id);
    }

    generateReport(id: number) {
        return this.http.get(this.BASE_URL + 'GenerateReport' + id);
    }

    startEncounter(data: EncounterData) {
        return this.http.post(this.BASE_URL + 'StartEncounter', data);
    }

    saveAction(action: Action) {
        return this.http.post(this.BASE_URL + 'SaveAction', action);
    }

    saveAndEnd(encounter: EncounterData) {
        return this.http.post(this.BASE_URL + 'SaveAndEndEncounter', encounter);
    }

    end(encounter: EncounterData) {
        return this.http.post(this.BASE_URL + 'EndEncounter', encounter);
    }
}
