import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  { path: '', component: AppointmentsComponent }
]

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AppointmentsModule { }
