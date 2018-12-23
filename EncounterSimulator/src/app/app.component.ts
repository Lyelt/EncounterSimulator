import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { SidenavService } from 'src/app/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sidenav') public sideNav: MatDrawer;

    constructor(private sidenavService: SidenavService) {
    }

    ngOnInit() {
        this.sidenavService.sideNav = this.sideNav;
    }

    toggleSidenav() {
        this.sidenavService.sideNav.toggle();
    }
}
