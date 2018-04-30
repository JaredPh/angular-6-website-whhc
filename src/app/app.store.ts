import { combineReducers } from 'redux';

import { eventsReducer, IEventsState, INITIAL_EVENTS_STATE } from './components/events/events.store';
// import { dateRed ucer,   IDateState,   INITIAL_DATE_STATE   } from './date.store';
import { newsReducer,   INewsState,   INITIAL_NEWS_STATE,  } from './components/news/news.store';


export interface IAppState {
  events: IEventsState;
  news:   INewsState;
  // date:   IDateState;
}

export const INITIAL_STATE: IAppState = {
  events: INITIAL_EVENTS_STATE,
  news:   INITIAL_NEWS_STATE,
  // date:   INITIAL_DATE_STATE,
};

export const rootReducer = combineReducers({
  events: eventsReducer,
  news:   newsReducer,
  // date:   dateReducer,
});
