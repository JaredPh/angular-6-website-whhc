import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app.store';
import { INews } from './news.interfaces';
import { newsActions } from './news.actions';
import { Observable } from 'rxjs/Observable';
import {testNews} from "./news.data";

export const tempNews: INews[] = testNews;

@Injectable()
export class NewsService {

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  loadLatestNews(count?: number): void {
    this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_REQUEST});

    const articles = tempNews.slice(0, count);

    const httpResponse = Observable.of(articles);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles: data });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_ERROR, error });
      },
    );
  }

  loadArticle(slug: string): void {
    const article = this.redux.select(s =>
      s.news.items.find(a =>
        a.slug === slug
      )
    );

    article.subscribe(a => {
      if (!a) {
        this.redux.dispatch({type: newsActions.NEWS_FETCH_ONE_REQUEST});

        const foundArticle = tempNews.find(tempArticle => tempArticle.slug === slug);
        const httpResponse = Observable.of(foundArticle);

        httpResponse.subscribe(
          (data) => {
            this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_SUCCESS, article: data });
          },
          (error) => {
              this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_ERROR, error });
          },
        );
      }
    });
  }
}
