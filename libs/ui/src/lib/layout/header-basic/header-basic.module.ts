import { LetModule } from '@rx-angular/template';
import { RouterModule } from '@angular/router';
import { HeaderBasicComponent } from './header-basic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeaderBasicComponent],
  imports: [
    CommonModule,
    RouterModule,
    LetModule
  ],
  exports: [HeaderBasicComponent]
})
export class HeaderBasicModule { }
