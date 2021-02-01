import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as fromStore from '../../store';
import * as fromServices from '../../services';

import { Label } from './../../models/label.model';
import { Language } from 'src/app/models/language.model';

@Component({
  selector: 'admin-dashboard',
  template: `
    <div class="admin-dashboard">
      <div class="table-container">
        <form [formGroup]="form" nz-form>
          <nz-form-item>
            <nz-form-control>
              <nz-select
                formControlName="language"
                (ngModelChange)="onChangeLanguage()"
              >
                <nz-option
                  *ngFor="let language of languages$ | async"
                  nzValue="{{ language.languageCode }}"
                  nzLabel="{{ language.name }}"
                ></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item>
        </form>
        <nz-table #labels nzBordered [nzData]="labels$ | async">
          <thead>
            <tr>
              <th nzWidth="30%">Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let data of labels.data" class="editable-row">
              <td>
                {{ data.name }}
              </td>
              <td>
                <div
                  class="editable-cell"
                  [hidden]="editId === data.id"
                  (click)="startEdit(data.id)"
                >
                  {{ data.value }}
                </div>
                <input
                  [hidden]="editId !== data.id"
                  type="text"
                  nz-input
                  [(ngModel)]="data.value"
                  (blur)="stopEdit()"
                />
              </td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>
  `,
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  labels$: Observable<Label[]>;
  languages$: Observable<Language[]>;
  form = new FormGroup({
    language: new FormControl(
      localStorage.getItem('selectedLanguageCode') || 'en'
    ),
  });
  constructor(
    private store: Store<fromStore.AppState>,
    private labelService: fromServices.LabelService
  ) {}

  ngOnInit() {
    this.languages$ = this.store.select(fromStore.getLanguages);
    this.loadLabels();
  }

  loadLabels() {
    this.labels$ = this.labelService.getLabelsByLanguageCode(
      this.form.value?.language
    );
  }

  onChangeLanguage() {
    this.loadLabels();
  }
}
