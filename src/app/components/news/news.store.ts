import { News } from '../shared/models/news.models';
import { newsActions, NewsReducerActions } from './news.actions';

export const INITIAL_NEWS_STATE: News[] = [];

export function newsReducer(state: News[] = INITIAL_NEWS_STATE, action): News[] {

  const actions = new NewsReducerActions(state, action);

  switch (action.type) {

    case newsActions.NEWS_FETCH_ONE_SUCCESS:
    case newsActions.NEWS_FETCH_MANY_SUCCESS:
      return actions.newsSuccess();

  }

  return state;
}
