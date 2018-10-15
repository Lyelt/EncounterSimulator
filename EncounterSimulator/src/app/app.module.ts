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

@NgModule({
  declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      AvailableCharactersComponent,
      AddCharacterComponent
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([
      {
        path: '', component: HomeComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
