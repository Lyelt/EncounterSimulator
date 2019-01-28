import { Injectable } from '@angular/core';
import { Status, ActionType } from 'src/models/game';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    BASE_URL = 'Game/';

    allStatuses: Status[];
    allActions: ActionType[];

    constructor(private http: Http) { }

    getAllStatuses(): Status[] {
        if (this.allStatuses == null) {
            this.allStatuses = [];
            this.getStatuses().subscribe(result => {
                for (let status of result.json()) {
                    this.allStatuses.push(status);
                }
            },
            error => {
                console.error(error);
            });
        }

        return this.allStatuses;
    }

    getStatuses() {
        return this.http.get(this.BASE_URL + 'GetAllStatuses');
    }

    getAllActionTypes(): ActionType[] {
        if (this.allActions == null) {
            this.allActions = [];
            this.getActionTypes().subscribe(result => {
                for (let action of result.json()) {
                    this.allActions.push(action);
                }
            },
            error => {
                console.error(error);
            });
        }

        return this.allActions;
    }

    getActionTypes() {
        return this.http.get(this.BASE_URL + 'GetAllActionTypes');
    }
}
 