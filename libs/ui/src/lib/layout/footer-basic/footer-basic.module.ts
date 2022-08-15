import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBasicComponent } from './footer-basic.component';

@NgModule({
  declarations: [FooterBasicComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [FooterBasicComponent]
})
export class FooterBasicModule { }
