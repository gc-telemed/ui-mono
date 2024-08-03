import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SpeedDialModule } from 'primeng/speeddial';

const routes: Routes = [
  { path: '', component: IndexComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SpeedDialModule, IndexComponent],
})
export class HomeModule { }
