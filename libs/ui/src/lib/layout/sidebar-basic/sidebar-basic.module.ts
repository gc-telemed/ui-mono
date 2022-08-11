import { LetModule, PushModule } from '@rx-angular/template';
import { SidebarBasicComponent } from './sidebar-basic.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SidebarBasicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LetModule,
    PushModule,
  ],
  exports: [
    SidebarBasicComponent
  ]
})
export class SidebarBasicModule { }
