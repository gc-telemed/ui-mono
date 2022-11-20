import { createSelector } from '@ngrx/store';
import { treatmentListFeature } from './treatment-list.reducer';

const {
    selectTreatmentListState,
    selectTreatments,
    selectConfig,
    selectSelection
} = treatmentListFeature;

export const selectTreatmentEntities = createSelector(
    selectTreatments,
    (treatments) => treatments.entities
);

export const selectTreatmentListStats = createSelector(
    selectTreatmentListState,
    (state) => ({
        count: state.treatments.count,
        currentPage: state.treatments.currentPage,
        pageSize: state.config.pageSize
    })
);

export const selectTreatmentPageSize = createSelector(
    selectTreatmentListState,
    (state) => (state.config.pageSize)
);

export const selectIsLoading = createSelector(
    selectTreatments,
    (treatments) => treatments.loading
);

export const treatmentListSelectors = {
    selectTreatmentListState,
    selectTreatmentEntities,
    selectTreatmentListStats,
    selectTreatmentPageSize,
    selectIsLoading,
    selectConfig,
    selectSelection
};

export const treatmentSelectors = {
    selectSelection
}