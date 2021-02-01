import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'language-message',
  template: ` <span>{{ selectedMessage$ | async }}</span> `,
  styleUrls: ['./language-message.component.scss'],
})
export class LanguageMessageComponent implements OnInit, OnChanges {
  @Input() defaultValue: string;
  @Input() key: string;
  selectedMessage$: Observable<string>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.selectedMessage$ = this.store.select(fromStore.getMessages).pipe(
      map((messages) => {
        return (
          messages.find((message) => message.key === this.key)?.value ||
          this.defaultValue
        );
      })
    );
  }

  ngOnChanges() {}
}
