import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Encounter Simulator';
  public availableCharacters: Character[];

  constructor(private http: Http) {
    this.availableCharacters = [];

    this.http.get('/api/values').subscribe(result => {
      for (let character of result.json().characters) {
        this.availableCharacters.push(character);
      }
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

class Character {
  public id: number;

  public name: string;

  public maxHP: number;

  public initiative: number;
}
