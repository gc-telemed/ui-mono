import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gita-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {

  options: any;

  ngOnInit(): void {
    this.options = {
      initialDate: '2022-08-01',
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
  }

}
