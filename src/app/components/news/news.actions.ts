import { News } from '../shared/models/news.models';

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
    private state: News[],
    private action: any,
  ) {}

  public newsSuccess() {
    const returnedSlugs = this.action.articles.map(a => a.slug);

    const articles: News[] = [
      ...this.action.articles,
      ...this.state.filter(a => returnedSlugs.indexOf(a.slug) < 0),
    ].sort((a, b) => b.date.localeCompare(a.date));

    return articles;
  }
}
