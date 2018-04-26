import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IEvent } from './events.interfaces';
import { IAppState } from '../../app.store';
import { ADD_EVENTS } from './events.actions';

const tempEvents: IEvent[] = [
  {
    title: 'Happy Hockey Days',
    image: '/assets/temp/event-3.png',
    start: '2018-05-18T15:00:00Z',
    end: '2018-05-21T12:00:00Z',
    location: 'Delft, Holland',
  },
  {
    title: 'HOPfest',
    image: '/assets/temp/event-2.png',
    start: '2018-05-26T10:00:00Z',
    end: '2018-05-26T18:00:00Z',
    location: 'Honor Oak Park',
  },
  {
    title: 'May Open Day',
    image: '/assets/temp/event-1.png',
    start: '2018-06-02T12:00:00Z',
    end: '2018-06-02T22:30:00Z',
    location: 'Whitefield School',
  },
];

@Injectable()
export class EventsService {

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  getLatestEvents(count?: number): void {
    const events = tempEvents;
    this.redux.dispatch({ type: ADD_EVENTS, events });
  }
}
