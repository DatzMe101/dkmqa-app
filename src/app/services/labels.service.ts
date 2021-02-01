import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Label } from './../models/label.model';

@Injectable()
export class LabelService {
  constructor(private http: HttpClient) {}

  getLabelsByLanguageCode(languageCode = 'en'): Observable<Label[]> {
    return this.http
      .get<Label[]>(`http://localhost:3000/labels?languageCode=${languageCode}`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
