import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AvailableCharacter } from 'src/models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
    BASE_URL = 'Character/';

    constructor(private http: Http) {
        
    }

    getAvailableCharacters() {
        return this.http.get(this.BASE_URL + 'GetAvailableCharacters');
    }

    getArchivedCharacters() {
        return this.http.get(this.BASE_URL + 'GetArchivedCharacters');
    }

    saveCharacter(character: AvailableCharacter) {
        return this.http.post(this.BASE_URL + 'SaveCharacter', character);
    }

    saveCharacters(characters: AvailableCharacter[]) {
        return this.http.post(this.BASE_URL + 'SaveCharacters', characters);
    }

    updateCharacter(character: AvailableCharacter) {
        return this.http.put(this.BASE_URL + 'UpdateCharacter', character);
    }

    deleteCharacter(id: number) {
        return this.http.delete(this.BASE_URL + 'DeleteCharacter/' + id);
    }

    archiveCharacter(id: number) {
        return this.http.delete(this.BASE_URL + 'ArchiveCharacter/' + id);
    }

    deleteForever(id: number) {
        return this.http.delete(this.BASE_URL + 'DeleteForever/' + id);
    }

    restoreCharacter(id: number) {
        return this.http.delete(this.BASE_URL + 'RestoreCharacter/' + id);
    }
}
