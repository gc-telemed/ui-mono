import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarModule } from 'primeng/calendar';
import { AppointmentComponent } from './appointment/appointment.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
]);


const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent,
    title: 'Appointment',
  }
];

@NgModule({
  declarations: [
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentModule { }
