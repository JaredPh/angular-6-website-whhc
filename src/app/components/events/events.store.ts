import { Event } from './events.models';
import { eventsActions, EventsActions } from './events.actions';

export interface IEventsState {
  events: Event[];
  pendingRequests: number;
  error: boolean;
}

export const INITIAL_EVENTS_STATE: IEventsState = {
  events: [],
  pendingRequests: 0,
  error: false,
};

export function eventsReducer(state: IEventsState = INITIAL_EVENTS_STATE, action): IEventsState {

  const actions = new EventsActions(state, action);

  switch (action.type) {
    case eventsActions.EVENTS_FETCH_MANY_REQUEST:
    case eventsActions.EVENTS_FETCH_ONE_REQUEST:
    case eventsActions.EVENTS_FETCH_LOCATION_REQUEST:
      return actions.eventsRequest();

    case eventsActions.EVENTS_FETCH_MANY_SUCCESS:
    case eventsActions.EVENTS_FETCH_ONE_SUCCESS:
    case eventsActions.EVENTS_FETCH_LOCATION_SUCCESS:
      return actions.eventsSuccess();

    case eventsActions.EVENTS_FETCH_MANY_ERROR:
    case eventsActions.EVENTS_FETCH_ONE_ERROR:
    case eventsActions.EVENTS_FETCH_LOCATION_ERROR:
      return actions.eventsError();

  }

  return state;
}
