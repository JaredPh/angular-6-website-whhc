import { Event } from '../shared/models/events.models';

export const eventsActions = {
  EVENTS_FETCH_MANY_REQUEST: 'EVENTS_FETCH_MANY_REQUEST',
  EVENTS_FETCH_MANY_SUCCESS: 'EVENTS_FETCH_MANY_SUCCESS',
  EVENTS_FETCH_MANY_ERROR: 'EVENTS_FETCH_MANY_ERROR',
  EVENTS_FETCH_ONE_REQUEST: 'EVENTS_FETCH_ONE_REQUEST',
  EVENTS_FETCH_ONE_SUCCESS: 'EVENTS_FETCH_ONE_SUCCESS',
  EVENTS_FETCH_ONE_ERROR: 'EVENTS_FETCH_ONE_ERROR',
};

export class EventsActions {

  constructor(
    private state: Event[],
    private action: any,
  ) {}

  public eventsSuccess() {

    const returnedSlugs = this.action.events.map(e => e.slug);

    const events: Event[] = [
      ...this.action.events,
      ...this.state.filter(e => returnedSlugs.indexOf(e.slug) < 0),
    ].sort((a, b) => a.start.localeCompare(b.start));

    return events;
  }
}
