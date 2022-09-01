import { setViewDay, setViewWeek, setViewMonth, setViewList } from './calendar.actions';
import { createReducer, on } from '@ngrx/store';
import { CalendarModel } from './calendar.model';

export const initialState: CalendarModel = {
    view: 'week'
}

export const calendarReducer = createReducer(
    initialState,

    on(setViewDay, (state): CalendarModel => ({ ...state, view: 'day' })),
    on(setViewWeek, (state): CalendarModel => ({ ...state, view: 'week' })),
    on(setViewMonth, (state): CalendarModel => ({ ...state, view: 'month' })),
    on(setViewList, (state): CalendarModel => ({ ...state, view: 'list' }))
);