import { Component, OnInit, ViewChild } from '@angular/core';
import { AvailableCharactersComponent } from '../available-characters/available-characters.component';
import { PreparationComponent } from '../preparation/preparation.component';
import { FightComponent } from '../fight/fight.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

    beginFight() {
        this.prep.refreshSelectedCharacters();
        this.fight.initializeCharacters();
    }

    restartFight() {
        this.chars.restart();
    }
}
