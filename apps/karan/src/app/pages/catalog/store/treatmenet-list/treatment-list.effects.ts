import { treatmentListSelectors } from './treatment-list.selectors';
import { treatmentListActions } from './treatment-list.actions';
import { TreatmentApiService } from './../../services/treatment-api.service';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { catchError, concatMap, map, of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class TreatmentListEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private treatmentApiService: TreatmentApiService
    ) { }

    listConfig$ = this.store.select(treatmentListSelectors.selectTreatmentListStats);

    loadTreatments = createEffect(() =>
        this.actions$.pipe(
            ofType(treatmentListActions.loadTreatments),
            concatLatestFrom(() => this.listConfig$),
            concatMap(([_, stats]) => this.treatmentApiService.getPagedFromStats(stats).pipe(
                map((results) =>
                    treatmentListActions.loadTreatmentsSuccess({
                        entities: results
                    })
                ),
                catchError((error) => of(treatmentListActions.loadTreatmentsFailure({ error }))
                )
            )
            )
        )
    );
}