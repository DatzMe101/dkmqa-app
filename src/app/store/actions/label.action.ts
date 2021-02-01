import { Action } from '@ngrx/store';
import { Label } from './../../models/label.model';

export const LOAD_LABEL = '[Label] Load Labels';
export const LOAD_LABEL_SUCCESS = '[Label] Load Labels Success';
export const LOAD_LABEL_FAIL = '[Label] Load Labels Fail';

export class LoadLabels implements Action {
  readonly type = LOAD_LABEL;
  constructor(public payload: string) {}
}
export class LoadLabelsSuccess implements Action {
  readonly type = LOAD_LABEL_SUCCESS;
  constructor(public payload: Label[]) {}
}
export class LoadLabelsFail implements Action {
  readonly type = LOAD_LABEL_FAIL;
  constructor(public payload: any) {}
}

export type LabelAction = LoadLabels | LoadLabelsSuccess | LoadLabelsFail;
