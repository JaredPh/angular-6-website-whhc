import { combineReducers } from 'redux';
import { tassign } from 'tassign';

import { Club } from './components/shared/models/clubs.models';
import { Event } from './components/shared/models/events.models';
import { Fixture } from './components/fixtures/fixtures.models';
import { News } from './components/shared/models/news.models';

import { authReducer, IAuthState, INITIAL_AUTH_STATE } from './components/auth/auth.store';
import { clubsReducer, INITIAL_CLUBS_STATE } from './components/clubs/clubs.store';
import { fixturesReducer, INITIAL_FIXTURES_STATE } from './components/fixtures/fixtures.store';
import { eventsReducer, INITIAL_EVENTS_STATE } from './components/events/events.store';
import { newsReducer, INITIAL_NEWS_STATE } from './components/news/news.store';
import { pagesReducer, INITIAL_PAGES_STATE, IPagesState } from './components/pages/pages.store';
import { tagsReducer, INITIAL_TAGS_STATE } from './components/tags/tags.store';

export interface IRequestState {
  pending: number;
  error: boolean;
  status: number;
}

export const INITIAL_REQUEST_STATE: IRequestState = {
  pending: 0,
  error: false,
  status: null,
};

export function requestsReducer(state: IRequestState = INITIAL_REQUEST_STATE, action): IRequestState {

  if (action.type === 'RESET_ERROR') {
    return tassign(state, { error: false, status: null });
  } else if (/.*FETCH.*REQUEST.*/.test(action.type)) {
    return tassign(state, {pending: state.pending + 1});
  } else if (/.*FETCH.*SUCCESS.*/.test(action.type)) {
    return tassign(state, {pending: state.pending - 1 });
  } else if (/.*FETCH.*ERROR.*/.test(action.type)) {
    return tassign(state, {pending: state.pending - 1, error: true, status: action.status });
  } else {
    return state;
  }
}

export interface IAppState {
  auth: IAuthState;
  clubs: Club[];
  events: Event[];
  fixtures: Fixture[];
  news: News[];
  tags: string[];
  pages: IPagesState;
  requests: IRequestState;
}

export const INITIAL_STATE: IAppState = {
  auth: INITIAL_AUTH_STATE,
  clubs: INITIAL_CLUBS_STATE,
  events: INITIAL_EVENTS_STATE,
  fixtures: INITIAL_FIXTURES_STATE,
  news: INITIAL_NEWS_STATE,
  tags: INITIAL_TAGS_STATE,
  pages: INITIAL_PAGES_STATE,
  requests: INITIAL_REQUEST_STATE,
};

export const rootReducer = combineReducers({
  auth: authReducer,
  clubs: clubsReducer,
  events: eventsReducer,
  fixtures: fixturesReducer,
  news: newsReducer,
  tags: tagsReducer,
  pages: pagesReducer,
  requests: requestsReducer,
});
