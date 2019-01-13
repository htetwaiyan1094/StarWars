import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatRippleModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

const MODULES = [
  CommonModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule,
  OverlayModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
