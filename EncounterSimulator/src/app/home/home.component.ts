import { Component, OnInit, ViewChild } from '@angular/core';
import { AvailableCharactersComponent } from '../available-characters/available-characters.component';
import { PreparationComponent } from '../preparation/preparation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    @ViewChild(AvailableCharactersComponent) chars: AvailableCharactersComponent;
    @ViewChild(PreparationComponent) prep: PreparationComponent;

  constructor() {
  }

  ngOnInit() {
  }

  sendSelectedCharacters() {
      this.chars.sendSelectedCharacters();
      this.prep.refreshSelectedCharacters();
  }
}
