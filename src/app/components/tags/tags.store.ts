import { tagsActions, TagsActions } from './tags.actions';

export interface ITagsState {
  items: string[];
  pendingRequests: number;
  error: boolean;
}

export const INITIAL_TAGS_STATE: ITagsState = {
  items: [],
  pendingRequests: 0,
  error: false,
};

export function tagsReducer(state: ITagsState = INITIAL_TAGS_STATE, action): ITagsState {

  const actions = new TagsActions(state, action);

  switch (action.type) {
    case tagsActions.TAGS_FETCH_MANY_REQUEST:
      return actions.tagsRequest();

    case tagsActions.TAGS_FETCH_MANY_SUCCESS:
      return actions.tagsSuccess();

    case tagsActions.TAGS_FETCH_MANY_ERROR:
      return actions.tagsError();
  }

  return state;
}
