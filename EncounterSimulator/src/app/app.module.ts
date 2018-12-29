import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AvailableCharactersComponent } from './available-characters/available-characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { PreparationComponent } from './preparation/preparation.component';
import { FightComponent } from './fight/fight.component';
import { CharacterSharingService } from './services/character-sharing.service';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ManageCharactersComponent } from './manage-characters/manage-characters.component';
import { EncounterComponent } from './encounter/encounter.component';
import { HideShowPipe } from './pipes/hide-show.pipe';
import { GameOptionsComponent } from './game-options/game-options.component';
import { ReviewComponent } from './review/review.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
    {
        path: '', component: EncounterComponent
    },
    {
        path: 'encounter', component: EncounterComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'manage', component: ManageCharactersComponent
    },
    {
        path: 'options', component: GameOptionsComponent
    },
    {
        path: 'review', component: ReviewComponent
    },
    {
        path: 'statistics', component: StatisticsComponent
    }
];

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
      SidenavComponent,
      ManageCharactersComponent,
      EncounterComponent,
      HideShowPipe,
      GameOptionsComponent,
      ReviewComponent,
      StatisticsComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(routes, {useHash: true}),
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
