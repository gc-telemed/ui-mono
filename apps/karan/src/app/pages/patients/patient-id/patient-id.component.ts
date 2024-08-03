import { Component, OnInit } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'gita-patient-id',
    templateUrl: './patient-id.component.html',
    styleUrls: ['./patient-id.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        InputTextModule,
        CalendarModule,
        ButtonModule,
        RippleModule,
    ],
})
export class PatientIdComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
