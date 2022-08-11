import { TableComponent } from './../features/bartender/table/table.component';
import { ScheduleComponent } from './../features/bartender/schedule/schedule.component';
import { GraphComponent } from './../features/bartender/graph/graph.component';
import { FormComponent } from './../features/bartender/form/form.component';
import { ChartComponent } from './../features/bartender/chart/chart.component';
import { PageComponent } from './page/page.component';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const bottomRoutes: Route[] = [
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'graph',
    component: GraphComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  }
].map(route => ({ ...route, outlet: "bottomBar" }));

const routes: Route[] = [
  {
    path: "",
    component: PageComponent,
    children: [
      {
        path: "editor",
        loadChildren: () => import("./editor/editor.module").then(m => m.EditorModule)
      },
      {
        path: "patients",
        loadChildren: () => import("./patient/patient.module").then(m => m.PatientModule)
      },
      {
        path: "appointments",
        loadChildren: () => import("./appointment/appointment.module").then(m => m.AppointmentModule)
      },
      {
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./index/index.module").then(m => m.IndexModule)
      },
      ...bottomRoutes
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
