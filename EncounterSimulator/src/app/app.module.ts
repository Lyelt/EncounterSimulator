import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AvailableCharactersComponent } from './available-characters/available-characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { PreparationComponent } from './preparation/preparation.component';
import { FightComponent } from './fight/fight.component';
import { CharacterSharingService } from './character-sharing.service';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      AvailableCharactersComponent,
      AddCharacterComponent,
      PreparationComponent,
      FightComponent,
      AboutComponent,
      SidenavComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
          {
              path: '', component: HomeComponent
          },
          {
              path: 'about', component: AboutComponent
          }
    ]),
      MaterialModule
  ],
  entryComponents: [
      AddCharacterComponent,
      AvailableCharactersComponent
  ],
  exports: [
      AvailableCharactersComponent,
      AddCharacterComponent
    ],
  providers: [CharacterSharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
