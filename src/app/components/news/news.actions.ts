import { tassign } from 'tassign';
import * as _ from 'lodash';

import { INewsState } from './news.store';
import { INews } from './news.interfaces';

export const newsActions = {
  NEWS_FETCH_MANY_ERROR:   'NEWS_FETCH_MANY_ERROR',
  NEWS_FETCH_MANY_REQUEST: 'NEWS_FETCH_MANY_REQUEST',
  NEWS_FETCH_MANY_SUCCESS: 'NEWS_FETCH_MANY_SUCCESS',
  NEWS_FETCH_ONE_ERROR:    'NEWS_FETCH_ONE_ERROR',
  NEWS_FETCH_ONE_REQUEST:  'NEWS_FETCH_ONE_REQUEST',
  NEWS_FETCH_ONE_SUCCESS:  'NEWS_FETCH_ONE_SUCCESS',
};

export class NewsReducerActions {

  constructor(
    private state: INewsState,
    private action: any,
  ) {}

  public request() {
    return tassign(this.state, { loading: true, loaded: false });
  }

  public success() {
    const fetchedArticles: INews[] = (this.action.articles) ? this.action.articles : [this.action.article];
    const articles: INews[] = _(fetchedArticles).union(this.state.items, 'slug').value();

    return tassign(this.state, { items: articles, loading: false, loaded: true });
  }

  public error() {
    return tassign(this.state, { loading: false, loaded: false });
  }
}
