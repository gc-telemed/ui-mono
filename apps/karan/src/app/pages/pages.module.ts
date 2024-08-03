import { SpeedDialModule } from 'primeng/speeddial';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    imports: [CommonModule, PagesRoutingModule, CoreModule, SpeedDialModule, MainComponent],
})
export class PagesModule { }
