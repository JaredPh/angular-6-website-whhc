import { tagsActions, TagsActions } from './tags.actions';

export const INITIAL_TAGS_STATE: string[] = [];


export function tagsReducer(state: string[] = INITIAL_TAGS_STATE, action): string[] {

  const actions = new TagsActions(state, action);

  switch (action.type) {
    case tagsActions.TAGS_FETCH_MANY_SUCCESS:
      return actions.tagsSuccess();

    // case tagsActions.TAGS_FETCH_MANY_REQUEST:
    // case tagsActions.TAGS_FETCH_MANY_ERROR:
    //   return state;
  }

  return state;
}
