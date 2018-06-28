import { tassign } from 'tassign';
import { News } from '../news/news.models';
import { Page } from './pages.models';

import { IPagesState } from './pages.store';

export const pagesActions = {
  PAGE_TREES_FETCH_ERROR:   'PAGE_TREES_FETCH_ERROR',
  PAGE_TREES_FETCH_REQUEST: 'PAGE_TREES_FETCH_REQUEST',
  PAGE_TREES_FETCH_SUCCESS: 'PAGE_TREES_FETCH_SUCCESS',
  PAGE_TREES_SET_CURRENT: 'PAGE_TREES_SET_CURRENT',
  PAGE_FETCH_ERROR:   'PAGE_FETCH_ERROR',
  PAGE_FETCH_REQUEST: 'PAGE_FETCH_REQUEST',
  PAGE_FETCH_SUCCESS: 'PAGE_FETCH_SUCCESS',
  PAGE_SPONSOR_ERROR: 'PAGE_SPONSOR_ERROR',
  PAGE_SPONSOR_REQUEST: 'PAGE_SPONSOR_REQUEST',
  PAGE_SPONSOR_SUCCESS: 'PAGE_SPONSOR_SUCCESS',
};

export class PagesReducerActions {

  constructor(
    private state: IPagesState,
    private action: any,
  ) {}

  public pageTreeSuccess() {
    return tassign(this.state, { trees: this.action.trees });
  }

  public pageTreeSetCurrent() {
    return tassign(this.state, { currentTree: this.action.tree });
  }

  public pageSuccess() {
    const returnedSlugs = this.action.pages.map(a => a.slug);

    const pages: Page[] = [
      ...this.action.pages,
      ...this.state.pages.filter(a => returnedSlugs.indexOf(a.slug) < 0),
    ];

    return tassign(this.state, { pages });
  }
}
