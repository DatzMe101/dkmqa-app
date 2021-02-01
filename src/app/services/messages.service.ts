import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Message } from '../models/message.model';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessagesByLanguageCode(languageCode = 'en'): Observable<Message[]> {
    return this.http
      .get<Message[]>(
        `http://localhost:3000/messages?languageCode=${languageCode}`
      )
      .pipe(catchError((error: any) => throwError(error.json())));
  }
}
