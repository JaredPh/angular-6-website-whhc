import { LESS, MORE } from './app.actions';
import { tassign } from 'tassign';

export interface IAppState {
  counter: number;
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
};

export function rootReducer(state: IAppState, action): IAppState {

  switch (action.type) {
    case LESS: return tassign(state, { counter: state.counter - 1 });
    case MORE: return tassign(state, { counter: state.counter + 1 });
  }
  return state;
}
