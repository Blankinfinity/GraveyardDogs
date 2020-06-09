import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';
import { PermissionDeniedComponent } from './permission-denied.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: 'war', data: { preload: false }, loadChildren: './modules/war/war.module#WarModule' },
  { path: 'roster', data: { preload: false }, loadChildren: './modules/roster/roster.module#RosterModule' },
  { path: 'raid', data: { preload: false }, loadChildren: './modules/raids/raids.module#RaidsModule' },
  { path: 'characters', data: { preload: false }, loadChildren: './modules/characters/characters.module#CharactersModule' },
   { path: '403', component: PermissionDeniedComponent, }, // catch any 403 erros
   { path: '**', pathMatch: 'full', component: PageNotFoundComponent }, // catch any unfound routes and redirect to 404 page
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, {
  // enableTracing: true, // uncomment to enable tracing.
  preloadingStrategy: SelectivePreloadingStrategyService,
});
