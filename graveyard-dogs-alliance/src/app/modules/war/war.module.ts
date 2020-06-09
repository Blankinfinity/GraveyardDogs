import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarComponent } from './war.component';
import { MaterialModule } from 'src/app/material.module';
import { WarRoutes } from './war.routes';

@NgModule({
  declarations: [WarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WarRoutes
  ]
})
export class WarModule { }