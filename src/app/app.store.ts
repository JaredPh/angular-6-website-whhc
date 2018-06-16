import { combineReducers } from 'redux';
import { tassign } from 'tassign';
import { Event } from './components/events/events.models';
import { News } from './components/news/news.models';
import { eventsReducer, INITIAL_EVENTS_STATE } from './components/events/events.store';
import { newsReducer, INITIAL_NEWS_STATE } from './components/news/news.store';
import { tagsReducer, INITIAL_TAGS_STATE } from './components/tags/tags.store';

export interface IRequestState {
  pending: number;
  error: boolean;
}

export const INITIAL_REQUEST_STATE: IRequestState = {
  pending: 0,
  error: false,
};

export function requestsReducer(state: IRequestState = INITIAL_REQUEST_STATE, action): IRequestState {

  if (/.*FETCH.*REQUEST.*/.test(action.type)) {
    return tassign(state, {pending: state.pending + 1});
  } else if (/.*FETCH.*SUCCESS.*/.test(action.type)) {
    return tassign(state, {pending: state.pending - 1, error: true});
  } else if (/.*FETCH.*ERROR.*/.test(action.type)) {
    return tassign(state, {pending: state.pending - 1, error: true});
  } else {
    return state;
  }
}

export interface IAppState {
  events: Event[];
  news: News[];
  tags: string[];
  requests: IRequestState;
}

export const INITIAL_STATE: IAppState = {
  events: INITIAL_EVENTS_STATE,
  news: INITIAL_NEWS_STATE,
  tags: INITIAL_TAGS_STATE,
  requests: INITIAL_REQUEST_STATE,
};

export const rootReducer = combineReducers({
  events: eventsReducer,
  news: newsReducer,
  tags: tagsReducer,
  requests: requestsReducer,
});
