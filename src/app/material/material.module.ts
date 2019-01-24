import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatRippleModule, MatButtonModule,
  MatButtonToggleModule, MatDividerModule, MatToolbarModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

const MODULES = [
  BrowserModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule,
  OverlayModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule,
  MatToolbarModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
