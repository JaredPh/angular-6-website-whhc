import { tassign } from 'tassign';
import * as _ from 'lodash';

import { IEventsState } from './events.store';
import { IEvent } from './events.interfaces';

export const eventsActions = {
  EVENTS_FETCH_MANY_REQUEST: 'EVENTS_FETCH_MANY_REQUEST',
  EVENTS_FETCH_MANY_SUCCESS: 'EVENTS_FETCH_MANY_SUCCESS',
  EVENTS_FETCH_MANY_ERROR: 'EVENTS_FETCH_MANY_SUCCESS',
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
  const fetchedEvents: IEvent[] = this.action.events;

    let events: IEvent[] = _(fetchedEvents).union(this.state.events, 'slug').value();
    events = events.sort((a, b) => a.start.localeCompare(b.start));

    const tags: string[] = _.uniq(events.reduce((a, e) => [...a, ...e.tags], [])).sort((a, b) => a.localeCompare(b));

    return tassign(this.state, { events, tags, pendingRequests: this.state.pendingRequests - 1 });
  }

  public eventsError() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests - 1, error: true });
  }
}
