import { tassign } from 'tassign';
import * as _ from 'lodash';

import { IEventsState } from './events.store';
import { Event } from './events.models';

export const eventsActions = {
  EVENTS_FETCH_MANY_REQUEST: 'EVENTS_FETCH_MANY_REQUEST',
  EVENTS_FETCH_MANY_SUCCESS: 'EVENTS_FETCH_MANY_SUCCESS',
  EVENTS_FETCH_MANY_ERROR: 'EVENTS_FETCH_MANY_SUCCESS',
  EVENTS_FETCH_ONE_REQUEST: 'EVENTS_FETCH_ONE_REQUEST',
  EVENTS_FETCH_ONE_SUCCESS: 'EVENTS_FETCH_ONE_SUCCESS',
  EVENTS_FETCH_ONE_ERROR: 'EVENTS_FETCH_ONE_SUCCESS',
  EVENTS_FETCH_LOCATION_REQUEST: 'EVENTS_FETCH_LOCATION_REQUEST',
  EVENTS_FETCH_LOCATION_SUCCESS: 'EVENTS_FETCH_LOCATION_SUCCESS',
  EVENTS_FETCH_LOCATION_ERROR: 'EVENTS_FETCH_LOCATION_ERROR',
};

export class EventsActions {

  constructor(
    private state: IEventsState,
    private action: any,
  ) {}

  public eventsRequest() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests + 1 });
  }

  public eventsSuccess() {

    const returnedSlugs = this.action.events.map(e => e.slug);

    const events: Event[] = [
      ...this.action.events,
      ...this.state.events.filter(e => returnedSlugs.indexOf(e.slug) < 0),
    ].sort((a, b) => a.start.localeCompare(b.start));

    return tassign(this.state, { events, pendingRequests: this.state.pendingRequests - 1 });
  }

  public eventsLocationSuccess() {

  }

  public eventsError() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests - 1, error: true });
  }
}
