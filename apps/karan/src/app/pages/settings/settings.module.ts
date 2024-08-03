import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldsetModule } from 'primeng/fieldset';

import { SettingsComponent } from './settings/settings.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [{ path: '', component: SettingsComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), FieldsetModule, SettingsComponent, DoctorsComponent],
})
export class SettingsModule {}
