import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule { }
