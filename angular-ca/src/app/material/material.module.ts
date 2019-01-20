import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatRippleModule, MatButtonModule,
  MatButtonToggleModule, MatDividerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

const MODULES = [
  BrowserModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule,
  OverlayModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
