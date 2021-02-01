import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Language } from '../models/language.model';

@Injectable()
export class LanguageService {
  constructor(private http: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.http
      .get<Language[]>(`http://localhost:3000/languages`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
