import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gita-patient-dental-history',
  templateUrl: './patient-dental-history.component.html',
  styleUrls: ['./patient-dental-history.component.scss'],
})
export class PatientDentalHistoryComponent implements OnInit {


  ngOnInit(): void {
    console.log("TeethHistory");
  }


}
