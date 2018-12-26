import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidenavService } from 'src/app/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('sidenav') public sideNav: MatSidenav;

    constructor(private sidenavService: SidenavService) {
    }

    ngOnInit() {
        this.sidenavService.sideNav = this.sideNav;
    }

    toggleSidenav() {
        this.sidenavService.sideNav.toggle();
    }
}
