import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBasicComponent } from './footer-basic.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [FooterBasicComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TooltipModule
  ],
  exports: [FooterBasicComponent]
})
export class FooterBasicModule { }
