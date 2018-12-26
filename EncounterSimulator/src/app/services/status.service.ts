import { Injectable } from '@angular/core';
import { Status } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

    constructor() { }

    getStatuses(): Status[] {
        var s1 = new Status();
        s1.id = 1;
        s1.name = "Grappled";
        s1.description = "Cannot move";

        var s2 = new Status();
        s2.id = 2;
        s2.name = "Stunned";
        s2.description = "Cannot move or attack";

        return [s1, s2];
    }
}
