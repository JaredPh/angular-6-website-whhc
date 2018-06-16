import { tassign } from 'tassign';

import { IPagesState } from './pages.store';

export const pagesActions = {
  PAGE_TREES_FETCH_ERROR:   'PAGE_TREES_FETCH_ERROR',
  PAGE_TREES_FETCH_REQUEST: 'PAGE_TREES_FETCH_REQUEST',
  PAGE_TREES_FETCH_SUCCESS: 'PAGE_TREES_FETCH_SUCCESS',
};

export class PagesReducerActions {

  constructor(
    private state: IPagesState,
    private action: any,
  ) {}

  public pageTreeSuccess() {
    return tassign(this.state, { trees: this.action.trees });
  }
}
