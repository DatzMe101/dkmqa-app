import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from './store';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <app-loader *ngIf="isLoading"></app-loader>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dkmqa-app';
  isLoading: boolean = true;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2500);
    // You can use language loading to watch languages
    // this.store.select(fromStore.getLanguagesLoading).subscribe((isLoading) => {
    // });
  }
}
