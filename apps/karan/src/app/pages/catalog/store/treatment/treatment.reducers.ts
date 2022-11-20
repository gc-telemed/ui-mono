import { on } from "@ngrx/store";
import { TreatmentListState, TreatmentMeta } from "../treatmenet-list/treatment-list.state";
import { treatmentActions } from "./treatmenet.actions";

export const treatmentReducers = [
    on(treatmentActions.selectTreatment, (state: TreatmentListState, { id }): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            selected: id
        };
        return { ...state, selection };
    }),
    on(treatmentActions.displayModalForm, (state: TreatmentListState, { id }): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            selected: id,
            modalEditTriggered: true
        };
        return { ...state, selection };
    }),
    on(treatmentActions.displayModalForm, (state: TreatmentListState, { id }): TreatmentListState => {
        const selection: TreatmentMeta = {
            ...state.selection,
            selected: id,
            inlineEditTriggered: true
        };
        return { ...state, selection };
    })
]