import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { HttpService } from '../shared/services/http.service';
import { News } from './news.models';
import { newsActions } from './news.actions';
import { testNews } from './news.data';

export const tempNews: News[] = testNews;

@Injectable()
export class NewsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public loadArticle(slug: string): void {
    this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_REQUEST});

    const httpResponse = this.httpService.get('/news');

    httpResponse.subscribe(
      (data: any) => {
        const articles: News[] = data.results.map(n => new News(n));

        this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_SUCCESS, articles });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_ERROR, error });
      },
    );
  }

  public loadArticles(options?: any): void {
    this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_REQUEST});

    const httpResponse = this.httpService.get('/news', options);

    httpResponse.subscribe(
      (data: any) => {
        const articles: News[] = data.results.map(n => new News(n));
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_ERROR, error });
      },
    );
  }
}
