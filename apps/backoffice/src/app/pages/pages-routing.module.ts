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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
