import { LayoutModule } from './../shared/layout/layout.module';
import { ButtonModule } from 'primeng/button';
import { FeaturesModule } from './../features/features.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { CardModule } from 'primeng/card';
import { PagesRoutingModule } from './pages-routing.module';
import { DockModule } from 'primeng/dock';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
    imports: [
        CommonModule,
        CardModule,
        PagesRoutingModule,
        DockModule,
        SlideMenuModule,
        SidebarModule,
        FeaturesModule,
        ButtonModule,
        LayoutModule,
        SpeedDialModule,
        PageComponent
    ],
})
export class PagesModule { }
