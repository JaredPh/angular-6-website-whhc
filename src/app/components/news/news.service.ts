import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app.store';
import { INews } from './news.interfaces';
import { ADD_NEWS } from './news.actions';

const tempNews: INews[] = [
  {
    heading: 'Interested in joining?',
    thumb: '/assets/temp/news-1.png',
    date: '2018-05-26T10:00:00Z',
  },
  {
    heading: 'Ladies\' ones win playoff',
    thumb: '/assets/temp/news-2.png',
    date: '2018-05-26T10:00:00Z',
  },
  {
    heading: 'Summer hockey dates announced',
    thumb: '/assets/temp/news-3.png',
    date: '2018-05-26T10:00:00Z',
  },
  {
    heading: 'Get you kit ready for the new season',
    thumb: '/assets/temp/news-4.png',
    date: '2018-05-26T10:00:00Z',
  },
  {
    heading: 'Club day - everything you need to know',
    thumb: '/assets/temp/news-5.png',
    date: '2018-05-26T10:00:00Z',
  },
];

@Injectable()
export class NewsService {

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  getLatestNews(count?: number): void {
    const items = tempNews;
    this.redux.dispatch({ type: ADD_NEWS, items });
  }
}
