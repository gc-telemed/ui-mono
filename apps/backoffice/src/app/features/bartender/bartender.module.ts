import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ComposerComponent } from './composer/composer.component';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TableComponent } from './table/table.component';

const COMPS = [
  ComposerComponent,
  GraphComponent,
  FormComponent,
  ChartComponent,
  TableComponent,
  ScheduleComponent,
]

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...COMPS
  ]
})
export class BartenderModule { }
