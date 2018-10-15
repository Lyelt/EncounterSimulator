import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AvailableCharacter } from './available-characters/available-characters.component';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    BASE_URL = 'api/Character';

    constructor(private http: Http) {
        
    }

    getAvailableCharacters() {
        return this.http.get(this.BASE_URL);
    }

    deleteCharacter(id: number) {
        return this.http.delete(this.BASE_URL + '/' + id);
    }

    saveCharacter(character: AvailableCharacter) {
        return this.http.post(this.BASE_URL, character);
    }

    updateCharacter(character: AvailableCharacter) {
        return this.http.put(this.BASE_URL, character);
    }
}
