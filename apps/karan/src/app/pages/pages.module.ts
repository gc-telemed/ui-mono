import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PagesRoutingModule, CoreModule],
})
export class PagesModule { }
