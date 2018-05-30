import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.store';

import { eventsActions } from './events.actions';
import { HttpService } from '../shared/services/http.service';

@Injectable()
export class EventsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public loadEvent(slug: string): void {
    // TODO: make this proper when route exists
    this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_ONE_REQUEST });

    const httpResponse = this.httpService.get(`/events/${slug}`);

    httpResponse.subscribe(
      (data: any) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_ONE_SUCCESS, events: data.results });
      },
      (error) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_ONE_ERROR, error });
      },
    );
  }

  public loadEvents(options?: any): void {
    this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_REQUEST });

    const httpResponse = this.httpService.get('/events', options);

    httpResponse.subscribe(
      (data: any) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_SUCCESS, events: data.results });
      },
      (error) => {
        this.redux.dispatch({ type: eventsActions.EVENTS_FETCH_MANY_ERROR, error });
      },
    );
  }
}
