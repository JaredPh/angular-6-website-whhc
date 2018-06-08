import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.store';

import { eventsActions } from './events.actions';
import { HttpService } from '../shared/services/http.service';
import { Event, Location } from './events.models';

@Injectable()
export class EventsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public async loadEvent(slug: string): Promise<void> {
    const slugIndexPromise: Promise<number> = new Promise((resolve) => {
      this.redux.select(s => s.events.events.findIndex(e => e.slug === slug))
        .subscribe(s => resolve(s));
    });

    const existsInState = ((await slugIndexPromise) >= 0);

    if (await existsInState === false) {
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
  }

  public loadEvents(options?: any): void {
    this.redux.dispatch({type: eventsActions.EVENTS_FETCH_MANY_REQUEST});

    const httpResponse = this.httpService.get('/events', options);

    httpResponse.subscribe(
      (data: any) => {
        const events: Event[] = data.results.map(e => new Event(e));
        this.redux.dispatch({type: eventsActions.EVENTS_FETCH_MANY_SUCCESS, events});
      },
      (error) => {
        this.redux.dispatch({type: eventsActions.EVENTS_FETCH_MANY_ERROR, error});
      },
    );
  }

  public async loadEventLocation(event: Event): Promise<void> {
    this.redux.dispatch({type: eventsActions.EVENTS_FETCH_LOCATION_REQUEST});
    const httpResponse = this.httpService.get(`/locations/${event.location.id}`);

    httpResponse.subscribe(
      (data: any) => {
        event.location = new Location(data.results[0]);

        const events = [ event ];

        this.redux.dispatch({type: eventsActions.EVENTS_FETCH_LOCATION_SUCCESS, events});
      },
      (error) => {
        this.redux.dispatch({type: eventsActions.EVENTS_FETCH_LOCATION_ERROR, error});
      },
    );
  }
}
