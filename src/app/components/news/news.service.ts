import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { HttpService } from '../shared/services/http.service';
import { News } from './news.models';
import { newsActions } from './news.actions';

@Injectable()
export class NewsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public async loadArticle(slug: string): Promise<void> {
    const slugIndexPromise: Promise<number> = new Promise((resolve) => {
      this.redux.select(s => s.news.articles.findIndex(n => n.slug === slug))
        .subscribe(s => resolve(s));
    });

    const existsInState = ((await slugIndexPromise) >= 0);

    if (!existsInState) {
      this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_REQUEST});

      const httpResponse = this.httpService.get(`/news/${slug}`);

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
  }

  public async loadArticles(options?: any): Promise<void> {
    if (options && options.include) {
      const slugsPromise: Promise<string[]> = new Promise((resolve) => {
        this.redux.select(s => s.news.articles.map(n => n.slug)).subscribe(s => resolve(s));
      });

      const slugs = await slugsPromise;

      const filteredInclude = options.include.filter(i => slugs.indexOf(i) < 0);

      if (filteredInclude.length > 0) {
        options.include = filteredInclude;
      } else {
        return;
      }
    }

    this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_REQUEST});

    const httpResponse = this.httpService.get('/news', options);

    httpResponse.subscribe(
      (data: any) => {
        const articles: News[] = data.results.map(n => new News(n));
        this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles});
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_ERROR, error });
      },
    );
  }
}
