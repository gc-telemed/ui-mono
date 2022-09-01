import { CalendarEffects } from './store/calendar.effects';
import { EffectsModule } from '@ngrx/effects';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { StoreModule } from '@ngrx/store';
import { calendarReducer } from './store/calendar.reducer';

const routes: Routes = [
  { path: '', component: AppointmentsComponent }
]

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenubarModule,
    InputTextModule,
    SplitterModule,
    StoreModule.forFeature('calendar', calendarReducer),
    EffectsModule.forFeature([CalendarEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppointmentsModule { }
