import { PagesReducerActions, pagesActions } from './pages.actions';
import { PageTree } from './pages.models';

export interface IPagesState {
  trees: PageTree[];
}

export const INITIAL_PAGES_STATE: IPagesState = {
  trees: [],
};

export function pagesReducer(state: IPagesState = INITIAL_PAGES_STATE, action): IPagesState {

  const actions = new PagesReducerActions(state, action);

  switch (action.type) {
    case pagesActions.PAGE_TREES_FETCH_SUCCESS:
      return actions.pageTreeSuccess();

    // case pagesActions.PAGE_TREES_FETCH_REQUEST:
    // case pagesActions.PAGE_TREES_FETCH_ERROR:
    //   return state;
  }

  return state;
}
