import { HeaderMenuTypeDirective } from './header-menu-type.directive';
import { LetModule } from '@rx-angular/template';
import { RouterModule } from '@angular/router';
import { HeaderBasicComponent } from './header-basic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeaderBasicComponent, HeaderMenuTypeDirective],
  imports: [
    CommonModule,
    RouterModule,
    LetModule
  ],
  exports: [HeaderBasicComponent, HeaderMenuTypeDirective]
})
export class HeaderBasicModule { }
