import { IEvent } from './events.interfaces';

export const testEvents: IEvent[] = [
  {
    slug: 'hhh-2018',
    heading: 'Happy Hockey Days',
    thumb: { url: '/assets/temp/0df32bd7-bf6f-4a04-b2b0-d8ed21c2cfad.png', width: 96, height: 96 },
    start: '2018-05-18T15:00:00Z',
    end: '2018-05-21T12:00:00Z',
    location: 'Delft, Holland',
  },
  {
    slug: 'hopfest-2018',
    heading: 'HOPfest',
    thumb: { url: '/assets/temp/45ce27ef-c30b-48a9-85d5-1080780dc5c7.png', width: 96, height: 96 },
    start: '2018-05-26T10:00:00Z',
    end: '2018-05-26T18:00:00Z',
    location: 'Honor Oak Park',
  },
  {
    slug: 'open-day-may-18',
    heading: 'May Open Day',
    thumb: { url: '/assets/temp/4bd70eec-8ef3-4d69-acb9-590117da8d8f.png', width: 96, height: 96 },
    start: '2018-06-02T12:00:00Z',
    end: '2018-06-02T22:30:00Z',
    location: 'Whitefield School',
  },
];
