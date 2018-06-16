import { tassign } from 'tassign';

import { IPagesState } from './pages.store';

export const pagesActions = {
  PAGE_TREES_FETCH_ERROR:   'PAGE_TREES_FETCH_ERROR',
  PAGE_TREES_FETCH_REQUEST: 'PAGE_TREES_FETCH_REQUEST',
  PAGE_TREES_FETCH_SUCCESS: 'PAGE_TREES_FETCH_SUCCESS',
  PAGE_TREES_SET_CURRENT: 'PAGE_TREES_SET_CURRENT',
};

export class PagesReducerActions {

  constructor(
    private state: IPagesState,
    private action: any,
  ) {}

  public pageTreeSuccess() {
    return tassign(this.state, { trees: this.action.trees });
  }

  pageTreeSetCurrent() {
    return tassign(this.state, { currentTree: this.action.tree });
  }
}
