import { tassign } from 'tassign';

import { ITagsState } from './tags.store';

export const tagsActions = {
  TAGS_FETCH_MANY_REQUEST: 'TAGS_FETCH_MANY_REQUEST',
  TAGS_FETCH_MANY_SUCCESS: 'TAGS_FETCH_MANY_SUCCESS',
  TAGS_FETCH_MANY_ERROR: 'TAGS_FETCH_MANY_ERROR',
};

export class TagsActions {

  constructor(
    private state: ITagsState,
    private action: any,
  ) {}

  public tagsRequest() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests + 1 });
  }

  public tagsSuccess() {
    return tassign(this.state, { tags: this.action.tags, pendingRequests: this.state.pendingRequests - 1 });
  }

  public tagsError() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests - 1, error: true });
  }
}
