import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as languageAction from '../actions/language.action';
import * as messageAction from '../actions/message.action';
import * as fromServices from '../../services';

@Injectable()
export class MessageEffects {
  constructor(
    private actions$: Actions,
    private messageService: fromServices.MessageService
  ) {}

  @Effect()
  loadMessages$ = this.actions$.pipe(
    ofType(languageAction.SELECT_LANGUAGE, messageAction.LOAD_MESSAGE),
    switchMap(({ payload }) => {
      return this.messageService.getMessagesByLanguageCode(payload).pipe(
        map((messages) => new messageAction.LoadMessagesSuccess(messages)),
        catchError((error) => of(new messageAction.LoadMessagesFail(error)))
      );
    })
  );
}
