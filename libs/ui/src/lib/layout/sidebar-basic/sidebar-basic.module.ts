import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxLet } from '@rx-angular/template/let';
import { SidebarBasicComponent } from './sidebar-basic.component';

@NgModule({
  declarations: [
    SidebarBasicComponent
  ],
  imports: [
    CommonModule,
    RxLet,
    RouterModule,
  ],
  exports: [
    SidebarBasicComponent
  ]
})
export class SidebarBasicModule { }
