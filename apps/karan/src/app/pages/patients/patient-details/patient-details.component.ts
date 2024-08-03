import { Component, OnInit } from '@angular/core';
import { MenuItem, SharedModule } from 'primeng/api';
import { PatientClinicalPhotosComponent } from '../patient-clinical-photos/patient-clinical-photos.component';
import { PatientIdPhotoComponent } from '../patient-id-photo/patient-id-photo.component';
import { PatientMedicalHistoryComponent } from '../patient-medical-history/patient-medical-history.component';
import { PatientDentalHistoryComponent } from '../patient-dental-history/patient-dental-history.component';
import { PatientNotesComponent } from '../patient-notes/patient-notes.component';
import { PatientIdComponent } from '../patient-id/patient-id.component';
import { AccordionModule } from 'primeng/accordion';
import { NgFor, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'gita-patient-details',
    templateUrl: './patient-details.component.html',
    styleUrls: ['./patient-details.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        NgFor,
        NgClass,
        AccordionModule,
        SharedModule,
        PatientIdComponent,
        PatientNotesComponent,
        PatientDentalHistoryComponent,
        PatientMedicalHistoryComponent,
        PatientIdPhotoComponent,
        PatientClinicalPhotosComponent,
    ],
})
export class PatientDetailsComponent implements OnInit {

  activeIndexes: number[] = [];

  steps: MenuItem[] = [
    { icon: "🧘", label: "Patient ID", expanded: true },
    { icon: "📔", label: "Quick Notes", expanded: false },
    { icon: "🦷", label: "Dental History", expanded: false },
    { icon: "🫀", label: "Medical History", expanded: false },
    { icon: "📷", label: "ID Photo", expanded: false },
    { icon: "📸", label: "Clinical Photos", expanded: false }
  ];

  ngOnInit() {
    console.log("inited");
  }

  onTabOpen(event: { index: number }) {
    if (event.index > this.steps.length) return;
    this.steps[event.index].expanded = true;
  }

  onTabClose(event: { index: number }) {
    if (event.index > this.steps.length) return;
    this.steps[event.index].expanded = false;
  }

}
