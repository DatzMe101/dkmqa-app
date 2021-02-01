import * as messageActions from '../actions/message.action';
import { Message } from '../../models/message.model';

export interface MessageState {
  data: Message[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: MessageState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state: MessageState = initialState,
  action: messageActions.MessageAction
): MessageState {
  switch (action.type) {
    case messageActions.LOAD_MESSAGE: {
      return { ...state, loading: true };
    }
    case messageActions.LOAD_MESSAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [...action.payload],
      };
    }
    case messageActions.LOAD_MESSAGE_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
    default: {
      return state;
    }
  }
}
