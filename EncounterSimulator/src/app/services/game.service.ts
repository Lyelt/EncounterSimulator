import { Injectable } from '@angular/core';
import { Status, ActionType } from 'src/models/game';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    BASE_URL = 'Game/'

    constructor(private http: Http) { }

    getAllStatuses() {
        return this.http.get(this.BASE_URL + 'GetAllStatuses');
    }

    getAllActionTypes() {
        return this.http.get(this.BASE_URL + 'GetAllActionTypes');
    }
}
