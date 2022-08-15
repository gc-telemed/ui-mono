import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, defineFullCalendarElement, FullCalendarElement } from '@fullcalendar/web-component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';


const plugins = [
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
];

defineFullCalendarElement();

@Component({
  selector: 'gita-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {

  options!: CalendarOptions;

  @ViewChild('calendar') calendar!: ElementRef<FullCalendarElement>;

  // ngAfterViewInit() {
  //   const calendarApi = this.calendar.nativeElement?.getApi();
  //   console.log("api", calendarApi);
  // }

  ngOnInit(): void {
    this.options = {
      plugins,
      initialDate: '2022-08-01',
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
      },
      titleFormat: {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
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

    console.log("options", this.options);
  }

}
