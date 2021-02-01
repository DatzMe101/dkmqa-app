import * as languageActions from '../actions/language.action';
import { Language } from './../../models/language.model';

export interface LanguageState {
  data: Language[];
  loaded: boolean;
  loading: boolean;
  selectedLanguageCode: string;
}

export const initialState: LanguageState = {
  data: [],
  loaded: false,
  loading: false,
  selectedLanguageCode: localStorage.getItem('selectedLanguageCode') || 'en',
};

export function reducer(
  state: LanguageState = initialState,
  action: languageActions.LanguageAction
): LanguageState {
  switch (action.type) {
    case languageActions.LOAD_LANGUAGES: {
      return { ...state, loading: true };
    }
    case languageActions.LOAD_LANGUAGES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: [...action.payload],
      };
    }
    case languageActions.LOAD_LANGUAGES_FAIL: {
      return { ...state, loading: false, loaded: false };
    }
    case languageActions.SELECT_LANGUAGE: {
      localStorage.setItem('selectedLanguageCode', action.payload);
      return { ...state, selectedLanguageCode: action.payload };
    }
    default: {
      return state;
    }
  }
}
