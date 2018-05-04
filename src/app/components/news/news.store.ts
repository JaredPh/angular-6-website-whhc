import { INews } from './news.interfaces';
import { newsActions, NewsReducerActions } from './news.actions';

export interface INewsState {
  items: INews[];
  loading: boolean;
  loaded: boolean;
}

export const INITIAL_NEWS_STATE: INewsState = {
  items: [],
  loading: false,
  loaded: false,
};

export function newsReducer(state: INewsState = INITIAL_NEWS_STATE, action): INewsState {

  const actions = new NewsReducerActions(state, action);

  switch (action.type) {
    case newsActions.NEWS_FETCH_ONE_REQUEST:
    case newsActions.NEWS_FETCH_MANY_REQUEST:
      return actions.request();

    case newsActions.NEWS_FETCH_ONE_SUCCESS:
    case newsActions.NEWS_FETCH_MANY_SUCCESS:
      return actions.success();

    case newsActions.NEWS_FETCH_ONE_ERROR:
    case newsActions.NEWS_FETCH_MANY_ERROR:
      return actions.error();
  }

  return state;
}
