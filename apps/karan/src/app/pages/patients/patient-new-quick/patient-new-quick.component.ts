import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientEditorService } from './../services/patient-editor.service';
import { AsyncPipe } from '@angular/common';
import { PatientIdComponent } from '../patient-id/patient-id.component';
import { SharedModule } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'gita-patient-new-quick',
    templateUrl: './patient-new-quick.component.html',
    styleUrls: ['./patient-new-quick.component.scss'],
    standalone: true,
    imports: [
        DialogModule,
        SharedModule,
        PatientIdComponent,
        AsyncPipe,
    ],
})
export class PatientNewQuickComponent {

  @Input() displayEditor$!: Observable<boolean>;
  constructor(private patientEditorService: PatientEditorService) { }


  setDialogVisibility(show: boolean) {
    this.patientEditorService.showEditor(show);
  }
}
