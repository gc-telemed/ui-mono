import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent,
    title: 'Appointment',
  }
];

@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppointmentModule { }
