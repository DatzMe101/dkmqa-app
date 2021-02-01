import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzIconModule } from 'ng-zorro-antd/icon';

import icons from './imports/icons';
import antDesign from './imports/ant-design';

import { AdminComponent } from './layouts/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin-dasboard/admin-dasboard.component';

import { ClientComponent } from './layouts/client/client.component';
import { ClientHomeComponent } from './pages/client-home/client-home.component';
import { LoginComponent } from './pages/login/login.component';
import { LanguageLabelComponent } from './components/language-label/language-label.component';
import { LanguageMessageComponent } from './components/language-message/language-message.component';
import { ClientHeaderComponent } from './layouts/client-header/client-header.component';
import { LoaderComponent } from './components/loader/loader.component';

import { reducers, effects } from './store';

import * as fromServices from './services';
import * as fromGuards from './guards';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminDashboardComponent,
    ClientComponent,
    ClientHomeComponent,
    LoginComponent,
    LanguageLabelComponent,
    LanguageMessageComponent,
    ClientHeaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    ...antDesign,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ...fromServices.services,
    ...fromGuards.guards,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
