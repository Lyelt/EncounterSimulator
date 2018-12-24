import { Injectable } from '@angular/core';
import { Action } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

    constructor() { }

    getActions(): Action[] {
        let a1 = new Action();
        a1.id = 1;
        a1.name = "Attack";
        a1.description = "Attack another character";

        let a2 = new Action();
        a2.id = 2;
        a2.name = "Dash";
        a2.description = "Take two movement actions";

        return [a1, a2];
    }
}
