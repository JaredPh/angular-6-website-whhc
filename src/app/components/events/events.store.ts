import { IEvent } from './events.interfaces';
import { ADD_EVENTS, EventsActions } from './events.actions';

export interface IEventsState {
  items: IEvent[];
}

export const INITIAL_EVENTS_STATE: IEventsState = {
  items: [],
};

export function eventsReducer(state: IEventsState = INITIAL_EVENTS_STATE, action): IEventsState {

  const actions = new EventsActions(state, action);

  switch (action.type) {
    case ADD_EVENTS: return actions.addEvents();
  }

  return state;
}