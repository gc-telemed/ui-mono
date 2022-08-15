import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

const MODS = [LayoutModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODS
  ],
  exports: [
    ...MODS
  ]
})
export class SharedModule { }
