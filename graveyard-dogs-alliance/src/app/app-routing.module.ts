import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarComponent } from './war/war.component';
import { RosterComponent } from './roster/roster.component';
import { RaidComponent } from './raid/raid.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'war', component: WarComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'raid', component: RaidComponent },
  { path: 'all-characters', component: AllCharactersComponent, pathMatch: 'full' },
{ path: 'account', loadChildren: './account/account.module#AccountModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
