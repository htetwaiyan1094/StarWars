import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatRippleModule, MatButtonModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

const MODULES = [
  MatCardModule,
  MatIconModule,
  MatRippleModule,
  OverlayModule,
  MatButtonModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
