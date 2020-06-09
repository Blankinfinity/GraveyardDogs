import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RosterComponent } from './roster.component';
import { MaterialModule } from 'src/app/material.module';
import { RosterRoutes } from './roster.routes';

@NgModule({
  declarations: [RosterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RosterRoutes
  ]
})
export class RosterModule { }