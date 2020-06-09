import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CdkTableModule
  ],
  providers: []
})
export class MaterialModule { }