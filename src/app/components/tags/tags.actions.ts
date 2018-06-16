export const tagsActions = {
  TAGS_FETCH_MANY_REQUEST: 'TAGS_FETCH_MANY_REQUEST',
  TAGS_FETCH_MANY_SUCCESS: 'TAGS_FETCH_MANY_SUCCESS',
  TAGS_FETCH_MANY_ERROR: 'TAGS_FETCH_MANY_ERROR',
};

export class TagsActions {

  constructor(
    private state: string[],
    private action: any,
  ) {}

  public tagsSuccess() {
    return this.action.tags;
  }
}
