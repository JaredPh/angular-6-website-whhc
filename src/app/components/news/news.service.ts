import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app.store';
import { INews } from './news.interfaces';
import { newsActions } from './news.actions';
import { of } from 'rxjs';
import { testNews } from './news.data';
import * as _ from 'lodash';

export const tempNews: INews[] = testNews;

@Injectable()
export class NewsService {

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  public loadTags(): void {
    this.redux.dispatch({type: newsActions.NEWS_FETCH_TAGS_REQUEST});

    const tags = _.uniq(testNews.reduce((a, e) => [...a, ...e.tags], [])).sort((a, b) => a.localeCompare(b));

    const httpResponse = of(tags);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_TAGS_SUCCESS, tags: data });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_TAGS_ERROR, error });
      },
    );
  }

  public loadLatestArticles(count: number): void {
    this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_REQUEST});

    const articles = tempNews.slice(0, count);

    const httpResponse = of(articles);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles: data });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_ERROR, error });
      },
    );
  }

  public loadArticlesByTag(tag: string, count: number): void {
    this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_REQUEST});

    const articles = tempNews.filter(a => a.tags.indexOf(tag) >= 0).slice(0, count);

    const httpResponse = of(articles);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles: data });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_ERROR, error });
      },
    );
  }

  public loadArticles(slugs: string[]): void {
    const articlesOb = this.redux.select(s => s.news.items.map(a => a.slug));

    articlesOb.subscribe(articles => {
      const missingSlugs = _.difference(slugs, articles);

      if (missingSlugs.length > 0) {
        this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_REQUEST});

        const foundArticles = tempNews.filter((a) => missingSlugs.indexOf(a.slug) >= 0);

        const httpResponse = of(foundArticles);

        httpResponse.subscribe(
          (data) => {
            this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles: data});
          },
          (error) => {
            this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_ERROR, error});
          },
        );
      }
    });
  }

  public loadArticle(slug: string): void {
    const article = this.redux.select(s =>
      s.news.items.find(a =>
        a.slug === slug
      )
    );

    article.subscribe(a => {
      if (!a) {
        this.redux.dispatch({type: newsActions.NEWS_FETCH_ONE_REQUEST});

        const foundArticle = tempNews.find(tempArticle => tempArticle.slug === slug);
        const httpResponse = of(foundArticle);

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
