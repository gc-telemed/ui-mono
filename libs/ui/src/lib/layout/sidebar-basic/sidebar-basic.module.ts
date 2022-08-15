import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@rx-angular/template';
import { SidebarBasicComponent } from './sidebar-basic.component';



@NgModule({
  declarations: [
    SidebarBasicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LetModule
  ],
  exports: [
    SidebarBasicComponent
  ]
})
export class SidebarBasicModule { }
