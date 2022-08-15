import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent }
]

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule { }
