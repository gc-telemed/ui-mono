import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { FormComponent } from './form/form.component';
import { GraphComponent } from './graph/graph.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TableComponent } from './table/table.component';

const COMPS = [
  GraphComponent,
  FormComponent,
  ChartComponent,
  TableComponent,
  ScheduleComponent,
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ...COMPS
    ],
    exports: [
        ...COMPS
    ]
})
export class BartenderModule { }
