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
      ...this.state.past.filter(e => returnedSlugs.indexOf(e.slug) < 0),
      ...this.state.future.filter(e => returnedSlugs.indexOf(e.slug) < 0),
    ];

    const now = new Date().toJSON();

    const past: Event[] = events.filter(e => e.end < now)
      .sort((b, a) => a.start.localeCompare(b.start));

    const future: Event[] = events.filter(e => e.end >= now)
      .sort((a, b) => a.start.localeCompare(b.start));

    const tags: string[] = _.uniq(
      events.reduce((a, e) => [...a, ...e.tags], []))
        .sort((a, b) => a.localeCompare(b)
    );

    return tassign(this.state, { past, future, tags, pendingRequests: this.state.pendingRequests - 1 });
  }

  public eventsError() {
    return tassign(this.state, { pendingRequests: this.state.pendingRequests - 1, error: true });
  }
}
