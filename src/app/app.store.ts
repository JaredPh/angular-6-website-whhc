import { combineReducers } from 'redux';

import { eventsReducer, IEventsState, INITIAL_EVENTS_STATE } from './components/events/events.store';
import { dateReducer, IDateState, INITIAL_DATE_STATE } from './date.store';


export interface IAppState {
  events: IEventsState;
  date: IDateState;

}

export const INITIAL_STATE: IAppState = {
  events: INITIAL_EVENTS_STATE,
  date: INITIAL_DATE_STATE,
};

export const rootReducer = combineReducers({
  events: eventsReducer,
  date: dateReducer,
});
