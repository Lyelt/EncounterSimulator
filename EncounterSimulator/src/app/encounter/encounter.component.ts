import { Component, OnInit, ViewChild } from '@angular/core';
import { AvailableCharactersComponent } from '../available-characters/available-characters.component';
import { PreparationComponent } from '../preparation/preparation.component';
import { FightComponent } from '../fight/fight.component';
import { TimeOfDay } from '../../models/encounter';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

    @ViewChild(AvailableCharactersComponent) chars: AvailableCharactersComponent;
    @ViewChild(PreparationComponent) prep: PreparationComponent;
    @ViewChild(FightComponent) fight: FightComponent;

    constructor() {
    }

    ngOnInit() {
    }

    sendSelectedCharacters() {
        this.chars.sendSelectedCharacters();
        this.prep.refreshSelectedCharacters();
    }

    beginEncounter() {
        this.prep.refreshSelectedCharacters();
        this.fight.initializeCharacters("", TimeOfDay.Dawn);
    }

    endEncounter() {
        this.fight.end();
        this.restart();
    }

    restart() {
        this.chars.restart();
        this.prep.refreshSelectedCharacters();
    }

    saveAndEndEncounter() {
        this.fight.saveAndEnd();
        this.restart();
    }
}
