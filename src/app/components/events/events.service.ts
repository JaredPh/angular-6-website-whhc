import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { testEvents } from './events.data';
import { IEvent } from './events.interfaces';
import { IAppState } from '../../app.store';
import { of } from 'rxjs';
import { eventsActions } from './events.actions';

@Injectable()
export class EventsService {

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  public loadLatestEvents(count: number): void {
    this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_REQUEST });

    const events: IEvent[] = testEvents.sort((a, b) => a.start.localeCompare(b.start)).slice(0, count);

    const httpResponse = of(events);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_SUCCESS, events: data });
      },
      (error) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_ERROR, error });
      },
    );
  }

  public loadEvents(): void {
    this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_REQUEST });

    const events: IEvent[] = testEvents;

    const httpResponse = of(events);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_SUCCESS, events: data });
      },
      (error) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_ERROR, error });
      },
    );
  }
}
