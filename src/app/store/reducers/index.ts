import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromLanguage from './language.reducer';
import * as fromLabel from './label.reducer';
import * as fromMessage from './message.reducer';

import { Label } from './../../models/label.model';
import { Language } from './../../models/language.model';
import { Message } from './../../models/message.model';

export interface AppState {
  languages: fromLanguage.LanguageState;
  labels: fromLabel.LabelState;
  messages: fromMessage.MessageState;
}

export const reducers: ActionReducerMap<AppState> = {
  languages: fromLanguage.reducer,
  labels: fromLabel.reducer,
  messages: fromMessage.reducer,
};

// Language Selector
export const getLanguageState = createFeatureSelector<fromLanguage.LanguageState>(
  'languages'
);

export const getLanguages = createSelector(
  getLanguageState,
  (state: fromLanguage.LanguageState): Language[] => state.data
);

export const getLanguagesLoaded = createSelector(
  getLanguageState,
  (state: fromLanguage.LanguageState): boolean => state.loaded
);

export const getLanguagesLoading = createSelector(
  getLanguageState,
  (state: fromLanguage.LanguageState): boolean => state.loading
);

// Label Selector
export const getLabelState = createFeatureSelector<fromLabel.LabelState>(
  'labels'
);
export const getLabels = createSelector(
  getLabelState,
  (state: fromLabel.LabelState): Label[] => state.data
);

export const getLabelsLoaded = createSelector(
  getLabelState,
  (state: fromLabel.LabelState): boolean => state.loaded
);

// Message Selector
export const getMessageState = createFeatureSelector<fromMessage.MessageState>(
  'messages'
);
export const getMessages = createSelector(
  getMessageState,
  (state: fromMessage.MessageState): Message[] => state.data
);

export const getMessagesLoaded = createSelector(
  getMessageState,
  (state: fromMessage.MessageState): boolean => state.loaded
);
