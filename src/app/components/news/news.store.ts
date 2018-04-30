import { INews } from './news.interfaces';
import { ADD_NEWS, NewsActions } from './news.actions';

export interface INewsState {
  items: INews[];
}

export const INITIAL_NEWS_STATE: INewsState = {
  items: [],
};

export function newsReducer(state: INewsState = INITIAL_NEWS_STATE, action): INewsState {

  const actions = new NewsActions(state, action);

  switch (action.type) {
    case ADD_NEWS: return actions.addNews();
  }

  return state;
}
