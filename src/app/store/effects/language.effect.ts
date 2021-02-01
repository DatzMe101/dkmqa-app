import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as languageAction from '../actions/language.action';
import * as fromServices from '../../services';

@Injectable()
export class LanguageEffects {
  constructor(
    private actions$: Actions,
    private languageService: fromServices.LanguageService
  ) {}

  @Effect()
  loadLanguages$ = this.actions$.pipe(
    ofType(languageAction.LOAD_LANGUAGES),
    switchMap(() => {
      return this.languageService.getLanguages().pipe(
        map((languages) => new languageAction.LoadLanguagesSuccess(languages)),
        catchError((error) => of(new languageAction.LoadLanguagesFail(error)))
      );
    })
  );
}
