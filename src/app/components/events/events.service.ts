import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.store';

import { eventsActions } from './events.actions';
import { HttpService } from '../shared/services/http.service';
import { Event } from './events.models';

@Injectable()
export class EventsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public loadEvent(slug: string): void {
    this.redux.select(s => [...s.events.future, ...s.events.past]).subscribe((stateEvents) => {
      if (!stateEvents.find(e => e.slug === slug)) {
        this.redux.dispatch({type: eventsActions.EVENTS_FETCH_ONE_REQUEST});
        const httpResponse = this.httpService.get(`/events/${slug}`);

        httpResponse.subscribe(
          (data: any) => {
            const events: Event[] = data.results.map(e => new Event(e));

            this.redux.dispatch({type: eventsActions.EVENTS_FETCH_ONE_SUCCESS, events});
          },
          (error) => {
            this.redux.dispatch({type: eventsActions.EVENTS_FETCH_ONE_ERROR, error});
          },
        );
      }
    });
  }

  public loadEvents(options?: any): void {
    this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_REQUEST });

    const httpResponse = this.httpService.get('/events', options);

    httpResponse.subscribe(
      (data: any) => {
        const events: Event[] = data.results.map(e => new Event(e));
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_SUCCESS, events });
      },
      (error) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_ERROR, error });
      },
    );
  }
}
