import { InputTextModule } from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';

const routes: Routes = [
  { path: '', component: AppointmentsComponent }
]

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MenubarModule, InputTextModule, DividerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppointmentsModule { }
