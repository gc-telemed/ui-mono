import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarBasicComponent } from './sidebar-basic.component';

@NgModule({
  declarations: [
    SidebarBasicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarBasicComponent
  ]
})
export class SidebarBasicModule { }
