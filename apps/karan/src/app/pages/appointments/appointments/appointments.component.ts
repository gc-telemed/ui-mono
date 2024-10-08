import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { MenuItem } from 'primeng/api';

import { CalendarViewService } from './../services/calendar-view.service';
import { CalendarOptions } from '@fullcalendar/core';
import { SpeedDialModule } from 'primeng/speeddial';
import { EventEditorComponent } from '../event-editor/event-editor.component';

@Component({
    selector: 'gita-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss'],
    standalone: true,
    imports: [
        FullCalendarModule,
        EventEditorComponent,
        SpeedDialModule,
    ],
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  options!: CalendarOptions;

  floatItems!: MenuItem[];

  displayEditor$ = this.viewService.displayEditor$;

  @ViewChild('calendar', { static: true }) calendar!: FullCalendarComponent;

  constructor(private viewService: CalendarViewService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.options = this.viewService.options;
  }

  ngAfterViewInit() {
    setTimeout(() => this.viewService.api = this.calendar?.getApi(), 1000);
    // this.viewService.api = this.calendar.getApi();
  }

}
