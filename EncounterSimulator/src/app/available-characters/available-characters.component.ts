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
  BASE_URL = '/api/values';
  title = 'Encounter Simulator';
  dataSource: MatTableDataSource<AvailableCharacter>;
  availableCharacters: AvailableCharacter[];
  columnHeaders = ['select', 'name', 'maxHP', 'ac', 'speed', 'delete'];
  selection = new SelectionModel<AvailableCharacter>(true, []);

  constructor(private http: Http) {
    this.availableCharacters = [];

    this.http.get(this.BASE_URL).subscribe(
      result => {
        for (let character of result.json()) {
          this.availableCharacters.push(character);
        }
      },
      error => {
        console.error(error);
      },
      () => {
        this.dataSource = new MatTableDataSource(this.availableCharacters);
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

  addCharacter() {

  }

  deleteCharacter(id: number) {
    this.http.delete(this.BASE_URL + '/' + id).subscribe(
      result => {},
      error => {
        console.error(error);
      },
      () => {
        const index = this.availableCharacters.findIndex(char => char.id === id);
        this.availableCharacters.splice(index, 1);
        this.refreshData();
      });
  }

  refreshData() {
    this.dataSource.data = this.availableCharacters;
  }
}

class AvailableCharacter {
  id: number;

  name: string;

  maxHP: number;

  ac: number;

  speed: number;
}
