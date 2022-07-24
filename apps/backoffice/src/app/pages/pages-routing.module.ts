import { TableComponent } from './../features/bartender/table/table.component';
import { ScheduleComponent } from './../features/bartender/schedule/schedule.component';
import { GraphComponent } from './../features/bartender/graph/graph.component';
import { FormComponent } from './../features/bartender/form/form.component';
import { ChartComponent } from './../features/bartender/chart/chart.component';
import { ComposerComponent } from './../features/bartender/composer/composer.component';
import { PageComponent } from './page/page.component';
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

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
        path: "",
        pathMatch: "full",
        loadChildren: () => import("./index/index.module").then(m => m.IndexModule)
      },
      {
        path: 'composer',
        component: ComposerComponent,
        outlet: "bottomBar",
      },
      {
        path: 'chart',
        component: ChartComponent,
        outlet: "bottomBar",
      },
      {
        path: 'form',
        component: FormComponent,
        outlet: "bottomBar",
      },
      {
        path: 'graph',
        component: GraphComponent,
        outlet: "bottomBar",
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        outlet: "bottomBar",
      },
      {
        path: 'table',
        component: TableComponent,
        outlet: "bottomBar",
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
