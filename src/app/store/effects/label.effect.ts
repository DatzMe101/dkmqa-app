import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as labelAction from '../actions/label.action';
import * as languageAction from '../actions/language.action';
import * as fromServices from '../../services';

@Injectable()
export class LabelEffects {
  constructor(
    private actions$: Actions,
    private labelService: fromServices.LabelService
  ) {}

  @Effect()
  loadLabels$ = this.actions$.pipe(
    ofType(languageAction.SELECT_LANGUAGE, labelAction.LOAD_LABEL),
    switchMap(({ payload }) => {
      return this.labelService.getLabelsByLanguageCode(payload).pipe(
        map((labels) => new labelAction.LoadLabelsSuccess(labels)),
        catchError((error) => of(new labelAction.LoadLabelsFail(error)))
      );
    })
  );
}
