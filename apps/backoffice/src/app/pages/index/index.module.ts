import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        IndexComponent
    ],
})
export class IndexModule { }
