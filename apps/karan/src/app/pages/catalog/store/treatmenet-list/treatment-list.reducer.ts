import { createFeature, createReducer, on } from "@ngrx/store";
import { treatmentReducers } from '../treatment/treatment.reducers';
import { treatmentListActions } from './treatment-list.actions';
import { TreatmentListConfig, treatmentListInitialState, TreatmentListMeta, TreatmentListState } from './treatment-list.state';

export const treatmentListFeature = createFeature({
    name: 'treatmentList',
    reducer: createReducer(
        treatmentListInitialState,
        on(treatmentListActions.changePageNumber, (state, { currentPage }): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                currentPage,
            };
            return { ...state, treatments };
        }),
        on(treatmentListActions.changePaginationConfig, (state, { pageSize }): TreatmentListState => {
            const config: TreatmentListConfig = {
                ...state.config,
                pageSize
            };
            return { ...state, config };
        }),
        on(treatmentListActions.loadTreatments, (state): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                loading: true
            };
            return { ...state, treatments };
        }),
        on(treatmentListActions.loadTreatmentsSuccess, (state, { entities }): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                entities: [...state.treatments.entities, ...entities],
                count: state.treatments.count + entities.length,
                currentPage: state.treatments.currentPage + 1,
                loading: false,
                loaded: true
            };
            return { ...state, treatments };
        }),
        on(treatmentListActions.loadTreatmentsFailure, (state): TreatmentListState => {
            const treatments: TreatmentListMeta = {
                ...state.treatments,
                loading: false,
                loaded: true
            };
            return { ...state, treatments };
        }),
        ...treatmentReducers
    )
});