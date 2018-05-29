import { IEvent } from './events.interfaces';
import { eventsActions, EventsActions } from './events.actions';

export interface IEventsState {
  future: IEvent[];
  past: IEvent[];
  pendingRequests: number;
  error: boolean;
  tags: string[];
}

export const INITIAL_EVENTS_STATE: IEventsState = {
  future: [],
  past: [],
  pendingRequests: 0,
  error: false,
  tags: [],
};

export function eventsReducer(state: IEventsState = INITIAL_EVENTS_STATE, action): IEventsState {

  const actions = new EventsActions(state, action);

  switch (action.type) {
    case eventsActions.EVENTS_FETCH_MANY_REQUEST:
    case eventsActions.EVENTS_FETCH_ONE_REQUEST:
      return actions.eventsRequest();

    case eventsActions.EVENTS_FETCH_MANY_SUCCESS:
    case eventsActions.EVENTS_FETCH_ONE_SUCCESS:
      return actions.eventsSuccess();

    case eventsActions.EVENTS_FETCH_MANY_ERROR:
    case eventsActions.EVENTS_FETCH_ONE_ERROR:
      return actions.eventsError();
  }

  return state;
}
