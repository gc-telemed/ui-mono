import { FeaturesModule } from './../features/features.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { CardModule } from 'primeng/card';
import { PagesRoutingModule } from './pages-routing.module';
import { DockModule } from 'primeng/dock';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    CardModule,
    PagesRoutingModule,
    DockModule,
    SidebarModule,
    FeaturesModule
  ],
})
export class PagesModule { }
