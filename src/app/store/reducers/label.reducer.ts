import * as labelActions from '../actions/label.action';
import { Label } from './../../models/label.model';

export interface LabelState {
  data: Label[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: LabelState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state: LabelState = initialState,
  action: labelActions.LabelAction
): LabelState {
  switch (action.type) {
    case labelActions.LOAD_LABEL: {
      return { ...state, loading: true };
    }
    case labelActions.LOAD_LABEL_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [...action.payload],
      };
    }
    case labelActions.LOAD_LABEL_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
    default: {
      return state;
    }
  }
}
