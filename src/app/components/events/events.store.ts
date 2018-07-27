import { Event } from '../shared/models/events.models';
import { eventsActions, EventsActions } from './events.actions';

export const INITIAL_EVENTS_STATE: Event[] = [];

export function eventsReducer(state: Event[] = INITIAL_EVENTS_STATE, action): Event[] {

  const actions = new EventsActions(state, action);

  switch (action.type) {

    case eventsActions.EVENTS_FETCH_MANY_SUCCESS:
    case eventsActions.EVENTS_FETCH_ONE_SUCCESS:
      return actions.eventsSuccess();

  }

  return state;
}
