import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-available-characters',
  templateUrl: './available-characters.component.html',
  styleUrls: ['./available-characters.component.css']
})
export class AvailableCharactersComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  title = 'Encounter Simulator';
  dataSource: MatTableDataSource<Character>;
  columnHeaders = ['select', 'name', 'maxHP'];
  selection = new SelectionModel<Character>(true, []);

  constructor(private http: Http) {
    let availableCharacters: Character[] = [];

    this.http.get('/api/values').subscribe(
      result => {
        for (let character of result.json()) {
          availableCharacters.push(character);
        }
      },
      error => {
        console.error(error)
      },
      () => {
        this.dataSource = new MatTableDataSource(availableCharacters);
        this.dataSource.sort = this.sort;
      });
  }

  ngOnInit() {

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}

class Character {
  id: number;

  name: string;

  maxHP: number;

  initiative: number;
}
