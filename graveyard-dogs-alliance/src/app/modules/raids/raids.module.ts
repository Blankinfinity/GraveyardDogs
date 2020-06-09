import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaidComponent } from './raid/raid.component';
import { MaterialModule } from 'src/app/material.module';
import { RaidRoutes } from './raid.routes';

@NgModule({
  declarations: [RaidComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RaidRoutes
  ]
})
export class RaidsModule { }