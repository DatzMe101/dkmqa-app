import { Action } from '@ngrx/store';
import { Language } from './../../models/language.model';

export const LOAD_LANGUAGES = '[Language] Load Languages';
export const LOAD_LANGUAGES_SUCCESS = '[Language] Load Languages Success';
export const LOAD_LANGUAGES_FAIL = '[Language] Load Languages Fail';
export const SELECT_LANGUAGE = '[Language] Select Current Language';

export class LoadLanguages implements Action {
  readonly type = LOAD_LANGUAGES;
}
export class LoadLanguagesSuccess implements Action {
  readonly type = LOAD_LANGUAGES_SUCCESS;
  constructor(public payload: Language[]) {}
}
export class LoadLanguagesFail implements Action {
  readonly type = LOAD_LANGUAGES_FAIL;
  constructor(public payload: any) {}
}
export class SelectLanguage implements Action {
  readonly type = SELECT_LANGUAGE;
  constructor(public payload: string) {}
}

export type LanguageAction =
  | LoadLanguages
  | LoadLanguagesSuccess
  | LoadLanguagesFail
  | SelectLanguage;
