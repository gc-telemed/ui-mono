import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [PatientDetailsComponent, PatientsComponent],
  imports: [CommonModule],
})
export class PatientsModule {}
