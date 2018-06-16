import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { HttpService } from '../shared/services/http.service';
import { pagesActions } from './pages.actions';
import { PageTree } from './pages.models';

@Injectable()
export class PagesService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public async loadPages(): Promise<void> {
    const treesExistsPromise: Promise<boolean> = new Promise((resolve) => {
      this.redux
        .select(s => s.pages.trees)
        .subscribe((pageTrees) => {
          resolve(pageTrees && pageTrees.length > 0);
        });
    });

    const existsInState = await treesExistsPromise;

    if (!existsInState) {
      this.redux.dispatch({ type: pagesActions.PAGE_TREES_FETCH_REQUEST });

      const httpResponse = this.httpService.get(`/pages`);

      httpResponse.subscribe(
        (data: any) => {
          const trees: PageTree[] = data.results.map(pt => new PageTree(pt));
          this.redux.dispatch({ type: pagesActions.PAGE_TREES_FETCH_SUCCESS, trees });
        },
        (error) => {
          this.redux.dispatch({ type: pagesActions.PAGE_TREES_FETCH_ERROR, error });
        },
      );
    }
  }
}
