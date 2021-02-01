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
  selector: 'language-label',
  template: ` <span *ngIf="!isEditable">{{ selectedLabel$ | async }}</span> `,
  styleUrls: ['./language-label.component.scss'],
})
export class LanguageLabelComponent implements OnInit, OnChanges {
  @Input() isEditable?: boolean;
  @Input() defaultValue: string;
  @Input() key: string;
  @Output() onChangeValue = new EventEmitter<void>();
  selectedLabel$: Observable<string>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.selectedLabel$ = this.store
      .select(fromStore.getLabels)
      .pipe(
        map(
          (labels) =>
            labels.find((label) => label.key === this.key)?.value ||
            this.defaultValue
        )
      );
  }

  ngOnChanges() {}
}
