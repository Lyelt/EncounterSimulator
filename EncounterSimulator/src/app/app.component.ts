import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'EncounterSimulator';
    public values: string[];

    constructor(private http: Http) {
        this.http.get('/api/values').subscribe(result => {
            this.values = result.json() as string[];
        }, error => console.error(error));
    }
}
