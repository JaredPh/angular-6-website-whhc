import { tassign } from 'tassign';

import { ICounterState } from './counter.store';

export const INCREMENT_REQUEST = 'INCREMENT_REQUEST';
export const INCREMENT_SUCCESS = 'INCREMENT_SUCCESS';
export const DECREMENT_REQUEST = 'DECREMENT_REQUEST';
export const DECREMENT_SUCCESS = 'DECREMENT_SUCCESS';
export const DECREMENT_ERROR = 'DECREMENT_ERROR';
export const INCREMENT_ERROR = 'INCREMENT_ERROR';


export class CounterActions {

  constructor(
    private state: ICounterState,
    private action: any,
  ) {}

  public increment(): ICounterState {
    return tassign(this.state, {counter: this.state.counter + 1, lastUpdated: new Date(), status: 'ok'});
  }

  public decrement(): ICounterState {
    return tassign(this.state, {counter: this.state.counter - 1, lastUpdated: new Date(), status: 'ok'});
  }

  public request(): ICounterState {
    return tassign(this.state, {status: 'request'});
  }

  public error(): ICounterState {
    return tassign(this.state, {status: 'error'});
  }
}
