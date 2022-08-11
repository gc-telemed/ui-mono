import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarBasicModule } from './sidebar-basic/sidebar-basic.module';

const MODS = [
  SidebarBasicModule
]

@NgModule({
  imports: [
    CommonModule,
    ...MODS
  ],
  exports: [
    ...MODS
  ]
})
export class LayoutModule { }
