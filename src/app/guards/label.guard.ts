import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';
import * as fromStore from '../store';

@Injectable()
export class LabelGuard implements CanActivate {
  constructor(private store: Store<fromStore.AppState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore();
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getLabelsLoaded).pipe(
      tap((loaded) => {
        if (!loaded) {
          this.store.dispatch(
            new fromStore.SelectLanguage(
              localStorage.getItem('selectedLanguageCode') || 'en'
            )
          );
        }
      }),
      filter((loaded) => loaded),
      take(1)
    );
  }
}
