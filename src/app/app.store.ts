import { combineReducers } from 'redux';

import { eventsReducer, IEventsState, INITIAL_EVENTS_STATE } from './components/events/events.store';
import { newsReducer,   INewsState,   INITIAL_NEWS_STATE   } from './components/news/news.store';
import { tagsReducer,   ITagsState,   INITIAL_TAGS_STATE   } from './components/tags/tags.store';

export interface IAppState {
  events: IEventsState;
  news: INewsState;
  tags: ITagsState;
}

export const INITIAL_STATE: IAppState = {
  events: INITIAL_EVENTS_STATE,
  news: INITIAL_NEWS_STATE,
  tags: INITIAL_TAGS_STATE,
};

export const rootReducer = combineReducers({
  events: eventsReducer,
  news: newsReducer,
  tags: tagsReducer,
});
