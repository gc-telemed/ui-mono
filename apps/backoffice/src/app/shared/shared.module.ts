import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ]
})
export class SharedModule { }
