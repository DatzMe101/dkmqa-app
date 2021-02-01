import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

import { Language } from '../../models/language.model';

@Component({
  selector: 'app-login',
  template: `
    <div class="app-login">
      <div class="app-login__container">
        <form
          [formGroup]="form"
          nz-form
          class="login-form"
          (ngSubmit)="onLogin()"
        >
          <nz-form-item>
            <nz-form-control nzErrorTip="Please input your username!">
              <nz-input-group nzPrefixIcon="user">
                <input
                  type="text"
                  class="form-input"
                  nz-input
                  formControlName="username"
                  placeholder="{{ usernameLabel }}"
                  required
                  ngModel
                />
              </nz-input-group>
            </nz-form-control>
          </nz-form-item>
          <nz-form-item>
            <nz-form-control nzErrorTip="Please input your passcode!">
              <nz-input-group class="input-group" nzPrefixIcon="lock">
                <input
                  numeric
                  type="password"
                  class="form-input"
                  nz-input
                  formControlName="password"
                  placeholder="{{ passwordLabel }}"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  required
                  maxlength="8"
                  ngModel
                />
              </nz-input-group>
            </nz-form-control>
          </nz-form-item>
          <nz-divider nzText="{{ languageLabel }}"></nz-divider>
          <nz-form-item>
            <nz-form-control nzErrorTip="Please select language">
              <nz-select
                formControlName="language"
                (ngModelChange)="onChangeLanguage()"
              >
                <nz-option
                  *ngFor="let labelLanguage of languages$ | async"
                  nzValue="{{ labelLanguage.languageCode }}"
                  nzLabel="{{ labelLanguage.name }}"
                ></nz-option>
              </nz-select>
            </nz-form-control>
          </nz-form-item>
          <button
            nz-button
            nzBlock
            class="login-button"
            [nzType]="'primary'"
            [disabled]="form.invalid"
            [nzLoading]="isLoading"
          >
            {{ isLoading ? 'Logging in' : loginLabel }}
          </button>
          <div class="error-message" *ngIf="errorMessage">
            <nz-alert
              nzType="error"
              [nzMessage]="errorMessage"
              nzShowIcon
            ></nz-alert>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMessage = '';
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
      Validators.pattern('[0-9]*'),
    ]),
    language: new FormControl(
      localStorage.getItem('selectedLanguageCode') || 'en'
    ),
  });
  languages$: Observable<Language[]>;
  usernameLabel: string;
  passwordLabel: string;
  languageLabel: string;
  loginLabel: string;

  constructor(
    private router: Router,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(
      new fromStore.SelectLanguage(this.form.value?.language || 'en')
    );
    this.languages$ = this.store.select(fromStore.getLanguages);
    this.store.select(fromStore.getLabels).subscribe((labels) => {
      this.usernameLabel =
        labels.find((label) => label.key === 'username')?.value || 'User ID';
      this.passwordLabel =
        labels.find((label) => label.key === 'password')?.value || 'Passcode';
      this.languageLabel =
        labels.find((label) => label.key === 'language-label')?.value ||
        'Language';
      this.loginLabel =
        labels.find((label) => label.key === 'login')?.value || 'Log in';
    });
  }

  onLogin() {
    this.router.navigate(['/']);
  }

  onChangeLanguage() {
    const language = this.form.value?.language;
    this.store.dispatch(new fromStore.SelectLanguage(language));
  }
}
