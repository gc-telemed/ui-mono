import { createActionGroup, props } from "@ngrx/store";
import { TreatmentEntity, TreatmentPayload } from "../../model/treatment.model";

export const treatmentActions = createActionGroup({
    source: 'Treatment List',
    events: {
        'Select Treatment': props<{ id: number }>(),
        'Display Modal Form': props<{ id: number }>(),
        'Display Inline Form': props<{ id: number }>(),

        'Update Treatment via Form': props<{ treatment: TreatmentEntity }>(),
        'Update Treatment InLine': props<{ id: number, patch: Partial<TreatmentPayload> }>(),
        'Update Treatment Failure': props<{ error: Error }>(),
        'Update Treatment Success': props<{ result: boolean }>(),

        'Delete Treatment': props<{ id: number }>(),
        'Delete Treatment Failure': props<{ error: Error }>(),
        'Delete Treatment Success': props<{ result: boolean }>(),
    }
});