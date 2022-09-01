import { ViewType, ViewOptionType } from '../store/calendar.model';
import { CalendarApi } from '@fullcalendar/web-component';
import { Injectable } from '@angular/core';

type ViewMap = {
  [key in ViewOptionType]: ViewType;
};

@Injectable({
  providedIn: 'root'
})
export class CalendarViewService {

  private calendarApi!: CalendarApi | null;

  private viewMap: ViewMap = {
    day: 'timeGridDay',
    week: 'timeGridWeek',
    month: 'dayGridMonth',
    list: 'listWeek',
  };

  set api(api: CalendarApi | null) {
    this.calendarApi = api;
  }

  change(option: ViewOptionType) {
    if (!this.calendarApi) throw new Error("Calendar API not set before invoking view change.");
    this.calendarApi?.changeView(this.viewMap[option]);
  }

}
