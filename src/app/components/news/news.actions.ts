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
  NEWS_FETCH_TAGS_ERROR:   'NEWS_FETCH_TAGS_ERROR',
  NEWS_FETCH_TAGS_REQUEST: 'NEWS_FETCH_TAGS_REQUEST',
  NEWS_FETCH_TAGS_SUCCESS: 'NEWS_FETCH_TAGS_SUCCESS',
};

export class NewsReducerActions {

  constructor(
    private state: INewsState,
    private action: any,
  ) {}

  public tagsRequest() {
    return tassign(this.state, {});
  }

  public tagsSuccess() {
    return tassign(this.state, { tags: this.action.tags });
  }

  public tagsError() {
    return tassign(this.state, {});
  }

  public newsRequest() {
    return tassign(this.state, { loading: true });
  }

  public newsSuccess() {
    const fetchedArticles: INews[] = (this.action.articles) ? this.action.articles : [this.action.article];

    let articles: INews[] = _(fetchedArticles).union(this.state.articles, 'slug').value();
    articles = articles.sort((a, b) => b.date.localeCompare(a.date));

    return tassign(this.state, { articles, loading: false });
  }

  public newsError() {
    return tassign(this.state, { loading: false });
  }
}
