import { Action } from '@ngrx/store';
import { Message } from './../../models/message.model';

export const LOAD_MESSAGE = '[Message] Load Messages';
export const LOAD_MESSAGE_SUCCESS = '[Message] Load Messages Success';
export const LOAD_MESSAGE_FAIL = '[Message] Load Messages Fail';

export class LoadMessages implements Action {
  readonly type = LOAD_MESSAGE;
  constructor(public payload: string) {}
}
export class LoadMessagesSuccess implements Action {
  readonly type = LOAD_MESSAGE_SUCCESS;
  constructor(public payload: Message[]) {}
}
export class LoadMessagesFail implements Action {
  readonly type = LOAD_MESSAGE_FAIL;
  constructor(public payload: any) {}
}

export type MessageAction =
  | LoadMessages
  | LoadMessagesSuccess
  | LoadMessagesFail;
