import { tassign } from 'tassign';
import * as _ from 'lodash';
import { Event } from '../events/events.models';

import { INewsState } from './news.store';
import { News } from './news.models';

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

  public newsRequest() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests + 1 });
  }

  public newsSuccess() {
    const fetchedArticles: News[] = this.action.articles;

    const returnedSlugs = this.action.articles.map(a => a.slug);

    const articles: News[] = [
      ...this.action.articles,
      ...this.state.articles.filter(a => returnedSlugs.indexOf(a.slug) < 0),
    ].sort((a, b) => b.date.localeCompare(a.date));

    return tassign(this.state, { articles, pendingRequests: this.state.pendingRequests - 1 });
  }

  public newsError() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests - 1, error: true });
  }
}
