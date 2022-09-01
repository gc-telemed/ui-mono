
import { createAction, props } from '@ngrx/store';
import { ViewOptionType } from './calendar.model';

export const setViewDay = createAction('[Calendar] Set View Day');

export const setViewWeek = createAction('[Calendar] Set View Week');

export const setViewMonth = createAction('[Calendar] Set View Month');

export const setViewList = createAction('[Calendar] Set View List');

export const viewChanged = createAction('[Calendar] View Changed', props<{ option: ViewOptionType }>());

export const setView = {
    day: setViewDay,
    week: setViewWeek,
    month: setViewMonth,
    list: setViewList
};