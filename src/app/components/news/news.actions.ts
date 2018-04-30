import { tassign } from 'tassign';
import { INewsState } from './news.store';

export const ADD_NEWS = 'ADD_NEWS';

export class NewsActions {

  constructor(
    private state: INewsState,
    private action: any,
  ) {}

  public addNews() {
    return tassign(this.state, { items: this.state.items.concat(this.action.items) });
  }
}
