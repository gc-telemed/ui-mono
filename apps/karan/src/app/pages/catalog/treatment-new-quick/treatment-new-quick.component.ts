import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { treatmentActions } from '../store/treatment/treatment.actions';
import { TreatmentApiService } from './../services/treatment-api.service';
import { ButtonModule } from 'primeng/button';
import { NgIf, AsyncPipe } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'gita-treatment-new-quick',
    templateUrl: './treatment-new-quick.component.html',
    styleUrls: ['./treatment-new-quick.component.scss'],
    standalone: true,
    imports: [
        DialogModule,
        SharedModule,
        NgIf,
        ReactiveFormsModule,
        ButtonModule,
        AsyncPipe,
    ],
})
export class TreatmentNewQuickComponent {
  @Input() displayEditor$!: Observable<boolean>;


  treatmentForm = this.fb.group({
    commonName: this.fb.nonNullable.control("", Validators.required),
    treatmentType: [""],
    visits: this.fb.nonNullable.control(1, Validators.required),
    expense: new FormControl<number | null>(null, Validators.required)
  });

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private apiService: TreatmentApiService
  ) { }


  setDialogVisibility(show: boolean) {
    if (!show) {
      this.store.dispatch(treatmentActions.hideModalForm());
    }
  }

  submitForm() {
    this.treatmentForm.markAllAsTouched();
    if (!this.treatmentForm.valid) return;
    this.apiService.create(this.treatmentForm.getRawValue()).subscribe();
  }
}
