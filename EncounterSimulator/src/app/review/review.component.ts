import { Component, OnInit } from '@angular/core';
import { EncounterData } from '../../models/encounter';
import { EncounterService } from '../services/encounter.service';
import { EncounterDetailComponent } from '../encounter-detail/encounter-detail.component';

@Component({
    selector: 'app-review',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
    encounters: EncounterData[];

    constructor(private encounterService: EncounterService) {
        this.refreshData();
    }

    ngOnInit() {

    }

    refreshData() {
        this.encounters = [];

        this.encounterService.getEncounters().subscribe(
            result => {
                for (let encounter of result.json()) {
                    this.encounters.push(encounter);
                }
            },
            error => {
                console.error(error);
            },
            () => {
                //this.encounters.sort((a: EncounterData, b: EncounterData) => b.startTime.getTime() - a.startTime.getTime());
            });
    }

    deleteEncounter(id) {
        this.encounterService.deleteEncounter(id).subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            });
    }

    generateReport(id) {
        this.encounterService.generateReport(id).subscribe(
            result => { },
            error => {
                console.error(error);
            },
            () => {
                this.refreshData();
            });
    }
}
