import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { FormalComponent } from './formal/formal.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [FormalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule,
    LayoutModule
  ],
  exports: [
    FormalComponent,
    ReactiveFormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
    LayoutModule
  ]
})
export class UiModule { }
