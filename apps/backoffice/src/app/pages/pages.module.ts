import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { CardModule } from 'primeng/card';
import { PagesRoutingModule } from './pages-routing.module';
import { DockModule } from 'primeng/dock';


@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    CardModule,
    PagesRoutingModule,
    DockModule
  ],
})
export class PagesModule { }
