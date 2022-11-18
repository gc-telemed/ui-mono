import { SpeedDialModule } from 'primeng/speeddial';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentNewQuickComponent } from './treatment-new-quick/treatment-new-quick.component';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TreatmentComponent, TreatmentNewQuickComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FontAwesomeModule,
    AgGridModule,
    SpeedDialModule,
    DialogModule,
    ReactiveFormsModule
  ],
})
export class CatalogModule { }
