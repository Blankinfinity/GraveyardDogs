import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { WarComponent } from './war/war.component';
import { RosterComponent } from './roster/roster.component';
import { RaidComponent } from './raid/raid.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { CharacterEditComponent } from './character-edit/character-edit.component';
import { CharacterAddComponent } from './character-add/character-add.component';
import { TeamAddComponent } from './team-add/team-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WarComponent,
    RosterComponent,
    RaidComponent,
    WelcomeComponent,
    LoginComponent,
    MyAccountComponent,
    CreateCharacterComponent,
    AllCharactersComponent,
    CharactersViewComponent,
    CharacterEditComponent,
    CharacterAddComponent,
    TeamAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
