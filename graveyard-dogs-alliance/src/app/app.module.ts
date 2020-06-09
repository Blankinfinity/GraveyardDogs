import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes, appRoutingProviders } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { LoginComponent } from './account/login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CharactersModule } from './modules/characters/characters.module';
import { RaidsModule } from './modules/raids/raids.module';
import { TeamsModule } from './modules/teams/teams.module';
import { WarModule } from './modules/war/war.module';
import { RosterModule } from './modules/roster/roster.module';
import { MaterialModule } from './material.module';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import { PermissionDeniedComponent } from './permission-denied.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/utils/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/utils/config.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WelcomeComponent,
    MyAccountComponent,
    PermissionDeniedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    CharactersModule,
    RaidsModule,
    TeamsModule,
    WarModule,
    RosterModule,
    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // appRoutes defines the catch-all ** route
    appRoutes,
  ],
  providers: [
    appRoutingProviders,
    SettingsService,
    ConfigService,
    SelectivePreloadingStrategyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
