import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamAddComponent } from './team-add/team-add.component';
import { MaterialModule } from 'src/app/material.module';
import { TeamsRoutes } from './teams.routes';

@NgModule({
  declarations: [TeamAddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TeamsRoutes
  ]
})
export class TeamsModule { }