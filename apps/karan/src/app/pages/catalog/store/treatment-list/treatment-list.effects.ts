import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TreatmentApiService } from './../../services/treatment-api.service';
import { treatmentListActions } from './treatment-list.actions';

@Injectable()
export class TreatmentListEffects {

    constructor(
        private actions$: Actions,
        private treatmentApiService: TreatmentApiService
    ) { }

    loadTreatments = createEffect(() =>
        this.actions$.pipe(
            ofType(treatmentListActions.loadTreatments),
            switchMap(() => this.treatmentApiService.getStream$.pipe(
                map((results) =>
                    treatmentListActions.loadTreatmentsSuccess({
                        entities: results
                    })
                ),
                catchError((error) => of(treatmentListActions.loadTreatmentsFailure({ error })))
            ))
        )
    );
}