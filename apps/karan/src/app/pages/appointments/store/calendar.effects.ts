import { ViewOptionProp } from './calendar.model';

import { CalendarViewService } from './../services/calendar-view.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setViewDay, setViewWeek, viewChanged, setViewMonth, setViewList } from './calendar.actions';
import { mergeMap, map, tap } from 'rxjs';

@Injectable()
export class CalendarEffects {

    setViewDay$ = createEffect(() => this.actions$.pipe(
        ofType(setViewDay),
        tap(() => this.viewService.change('day')),
        map(() => ({ type: viewChanged.type, option: 'day' }))
    ));

    setViewWeek$ = createEffect(() => this.actions$.pipe(
        ofType(setViewWeek),
        tap(() => this.viewService.change('week')),
        map(() => ({ type: viewChanged.type, option: 'week' }))
    ));

    setViewMonth$ = createEffect(() => this.actions$.pipe(
        ofType(setViewMonth),
        tap(() => this.viewService.change('month')),
        map(() => ({ type: viewChanged.type, option: 'month' }))
    ));

    setViewList$ = createEffect(() => this.actions$.pipe(
        ofType(setViewList),
        tap(() => this.viewService.change('list')),
        map(() => ({ type: viewChanged.type, option: 'list' }))
    ));

    constructor(
        private actions$: Actions,
        private viewService: CalendarViewService
    ) { }

}