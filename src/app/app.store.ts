import { combineReducers } from 'redux';

import { counterReducer, ICounterState, INITIAL_COUNTER_STATE } from './counter.store';
import { dateReducer, IDateState, INITIAL_DATE_STATE } from './date.store';

export interface IAppState {
  counter: ICounterState;
  date: IDateState;
}

export const INITIAL_STATE: IAppState = {
  counter: INITIAL_COUNTER_STATE,
  date: INITIAL_DATE_STATE,
};

export const rootReducer = combineReducers({
  counter: counterReducer,
  date: dateReducer,
});
