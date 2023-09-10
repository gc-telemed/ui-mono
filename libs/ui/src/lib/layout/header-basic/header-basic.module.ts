import { HeaderMenuTypeDirective } from './header-menu-type.directive';
import { RxLet } from '@rx-angular/template/let';
import { RouterModule } from '@angular/router';
import { HeaderBasicComponent } from './header-basic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HeaderBasicComponent, HeaderMenuTypeDirective],
  imports: [
    CommonModule,
    RouterModule,
    RxLet
  ],
  exports: [HeaderBasicComponent, HeaderMenuTypeDirective]
})
export class HeaderBasicModule { }
