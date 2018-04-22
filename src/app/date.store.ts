import {
  ADD_DAY, ADD_MONTH, ADD_WEEK,
  DateActions,
} from './date.actions';

export interface IDateState {
  date: Date;
}

export const INITIAL_DATE_STATE: IDateState = {
  date: new Date(),
};

export function dateReducer(state: IDateState = INITIAL_DATE_STATE, action): IDateState {

  const actions = new DateActions(state, action);

  switch (action.type) {
    case ADD_DAY: return actions.addDay();
    case ADD_WEEK: return actions.addWeek();
    case ADD_MONTH: return actions.addMonth();
  }

  return state;
}
