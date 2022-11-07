import { SpeedDialModule } from 'primeng/speeddial';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { TreatmentComponent } from './treatment/treatment.component';

@NgModule({
  declarations: [TreatmentComponent],
  imports: [CommonModule, CatalogRoutingModule, FontAwesomeModule, AgGridModule, SpeedDialModule],
})
export class CatalogModule { }
