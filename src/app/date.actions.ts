import { tassign } from 'tassign';
import * as moment from 'moment';

import { IDateState } from './date.store';

export const ADD_DAY = 'ADD_DAY';
export const ADD_WEEK = 'ADD_WEEK';
export const ADD_MONTH = 'ADD_MONTH';

export class DateActions {

  constructor(
    private state: IDateState,
    private action: any,
  ) {}

  public addDay(): IDateState {
    return tassign(this.state, { date: moment(this.state.date).add(1, 'day').toDate() });
  }

  public addWeek(): IDateState {
    return tassign(this.state, { date: moment(this.state.date).add(1, 'week').toDate() });
  }

  public addMonth(): IDateState {
    return tassign(this.state, { date: moment(this.state.date).add(1, 'month').toDate() });
  }

}
