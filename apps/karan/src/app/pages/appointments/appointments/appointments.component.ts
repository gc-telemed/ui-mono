import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement, FullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import { CalendarViewService } from './../services/calendar-view.service';


const plugins = [
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
];

defineFullCalendarElement();
@Component({
  selector: 'gita-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit, AfterViewInit {
  options!: CalendarOptions;

  @ViewChild('calendar', { static: true }) calendar!: ElementRef<FullCalendarElement>;

  constructor(private viewService: CalendarViewService) { }

  ngOnInit(): void {
    this.options = {
      plugins,
      initialDate: '2022-08-01',
      initialView: 'timeGridWeek',
      // headerToolbar: {
      //   left: 'prev,next today',
      //   center: 'title',
      //   right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      // },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
      },

      businessHours: {
        daysOfWeek: [0, 1, 2, 3, 4, 5],
        startTime: '09:00',
        endTime: '18:00',
      },
      nowIndicator: true,
      height: '80vh',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true
    };
  }

  ngAfterViewInit() {
    this.viewService.api = this.calendar.nativeElement.getApi();
  }



}
