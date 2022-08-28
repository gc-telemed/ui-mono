import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { StepsModule } from 'primeng/steps';
import { PatientModule } from '../../features/patient/patient.module';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  { path: '', component: PatientsComponent }
];

@NgModule({
  declarations: [PatientDetailsComponent, PatientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PanelModule,
    StepsModule,
    MenuModule,
    ButtonModule,
    AccordionModule,
    DataViewModule,
    DropdownModule,
    PatientModule
  ],
})
export class PatientsModule { }
