import { News } from './news.models';
import { newsActions, NewsReducerActions } from './news.actions';

export const INITIAL_NEWS_STATE: News[] = [];

export function newsReducer(state: News[] = INITIAL_NEWS_STATE, action): News[] {

  const actions = new NewsReducerActions(state, action);

  switch (action.type) {
  //   case newsActions.NEWS_FETCH_ONE_REQUEST:
  //   case newsActions.NEWS_FETCH_MANY_REQUEST:
  //     return actions.newsRequest();

    case newsActions.NEWS_FETCH_ONE_SUCCESS:
    case newsActions.NEWS_FETCH_MANY_SUCCESS:
      return actions.newsSuccess();

    // case newsActions.NEWS_FETCH_ONE_ERROR:
    // case newsActions.NEWS_FETCH_MANY_ERROR:
    //   return actions.newsError();
  }

  return state;
}
