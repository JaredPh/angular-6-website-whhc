import { News } from './news.models';
import { newsActions, NewsReducerActions } from './news.actions';

export interface INewsState {
  articles: News[];
  pendingRequests: number;
  error: boolean;
}

export const INITIAL_NEWS_STATE: INewsState = {
  articles: [],
  pendingRequests: 0,
  error: false,
};

export function newsReducer(state: INewsState = INITIAL_NEWS_STATE, action): INewsState {

  const actions = new NewsReducerActions(state, action);

  switch (action.type) {
    case newsActions.NEWS_FETCH_ONE_REQUEST:
    case newsActions.NEWS_FETCH_MANY_REQUEST:
      return actions.newsRequest();

    case newsActions.NEWS_FETCH_ONE_SUCCESS:
    case newsActions.NEWS_FETCH_MANY_SUCCESS:
      return actions.newsSuccess();

    case newsActions.NEWS_FETCH_ONE_ERROR:
    case newsActions.NEWS_FETCH_MANY_ERROR:
      return actions.newsError();
  }

  return state;
}
