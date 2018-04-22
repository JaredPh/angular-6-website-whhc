import {
  CounterActions,
  DECREMENT_ERROR, DECREMENT_REQUEST, DECREMENT_SUCCESS, INCREMENT_ERROR, INCREMENT_REQUEST, INCREMENT_SUCCESS,
} from './counter.actions';

export interface ICounterState {
  counter: number;
  status: string;
  lastUpdated: Date;
}

export const INITIAL_COUNTER_STATE: ICounterState = {
  counter: 0,
  status: 'ready',
  lastUpdated: null,
};

export function counterReducer(state: ICounterState = INITIAL_COUNTER_STATE, action): ICounterState {

  const actions = new CounterActions(state, action);

  switch (action.type) {
    case DECREMENT_ERROR:   return actions.error();
    case DECREMENT_REQUEST: return actions.request();
    case DECREMENT_SUCCESS: return actions.decrement();
    case INCREMENT_ERROR:   return actions.error();
    case INCREMENT_REQUEST: return actions.request();
    case INCREMENT_SUCCESS: return actions.increment();
  }

  return state;
}
