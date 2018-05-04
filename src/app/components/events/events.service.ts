import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IEvent } from './events.interfaces';
import { IAppState } from '../../app.store';
import { ADD_EVENTS } from './events.actions';

const tempEvents: IEvent[] = [
  {
    heading: 'Happy Hockey Days',
    image: '/assets/temp/0df32bd7-bf6f-4a04-b2b0-d8ed21c2cfad.png',
    start: '2018-05-18T15:00:00Z',
    end: '2018-05-21T12:00:00Z',
    location: 'Delft, Holland',
  },
  {
    heading: 'HOPfest',
    image: '/assets/temp/45ce27ef-c30b-48a9-85d5-1080780dc5c7.png',
    start: '2018-05-26T10:00:00Z',
    end: '2018-05-26T18:00:00Z',
    location: 'Honor Oak Park',
  },
  {
    heading: 'May Open Day',
    image: '/assets/temp/4bd70eec-8ef3-4d69-acb9-590117da8d8f.png',
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
    const items = tempEvents;
    this.redux.dispatch({ type: ADD_EVENTS, items });
  }
}
