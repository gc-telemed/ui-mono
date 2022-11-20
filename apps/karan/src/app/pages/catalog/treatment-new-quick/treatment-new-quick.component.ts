import { TreatmentApiService } from './../services/treatment-api.service';
import { TreatmentEditorService } from './../services/treatment-editor.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gita-treatment-new-quick',
  templateUrl: './treatment-new-quick.component.html',
  styleUrls: ['./treatment-new-quick.component.scss'],
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
    private editorService: TreatmentEditorService,
    private fb: FormBuilder,
    private apiService: TreatmentApiService
  ) { }


  setDialogVisibility(show: boolean) {
    this.editorService.showEditor(show);
  }

  submitForm() {
    this.treatmentForm.markAllAsTouched();
    if (!this.treatmentForm.valid) return;
    this.apiService.create(this.treatmentForm.getRawValue()).subscribe();
  }
}
