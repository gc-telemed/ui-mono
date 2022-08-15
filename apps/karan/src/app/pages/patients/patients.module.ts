import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  { path: '', component: PatientsComponent }
];

@NgModule({
  declarations: [PatientDetailsComponent, PatientsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PatientsModule { }
