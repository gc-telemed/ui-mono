import { Component, OnInit } from '@angular/core';
import { DeciduousTeethComponent } from './deciduous-teeth/deciduous-teeth.component';
import { PermanentTeethComponent } from './permanent-teeth/permanent-teeth.component';

@Component({
    selector: 'gita-patient-dental-history',
    templateUrl: './patient-dental-history.component.html',
    styleUrls: ['./patient-dental-history.component.scss'],
    standalone: true,
    imports: [PermanentTeethComponent, DeciduousTeethComponent],
})
export class PatientDentalHistoryComponent implements OnInit {


  ngOnInit(): void {
    console.log("TeethHistory");
  }


}
