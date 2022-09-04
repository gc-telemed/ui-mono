import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement, FullCalendarElement } from '@fullcalendar/web-component';
import { MenuItem } from 'primeng/api';

import { CalendarViewService } from './../services/calendar-view.service';

defineFullCalendarElement();

@Component({
  selector: 'gita-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  options!: CalendarOptions;

  floatItems!: MenuItem[];

  displayEditor$ = this.viewService.displayEditor$;

  @ViewChild('calendar', { static: true }) calendar!: ElementRef<FullCalendarElement>;

  constructor(private viewService: CalendarViewService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.options = this.viewService.options;
  }

  ngAfterViewInit() {
    this.viewService.api = this.calendar.nativeElement.getApi();
  }

}
