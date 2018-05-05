import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../../app.store';
import { INews } from './news.interfaces';
import { newsActions } from './news.actions';
import { Observable } from 'rxjs/Observable';

export const tempNews: INews[] = [
  {
    background: 'https://media.whhc.uk/public/0cad9291-ba50-4b9d-b951-99fc6bc255d1.png',
    body: `<p>So I really am important? How I feel when I'm drunk is correct? Kif, I have mated with a woman.
           Inform the men. Actually, that's still true. That's the ONLY thing about being a slave.</p><p>Belligerent
           and numerous. We're also Santa Claus! Bender, being God isn't easy. If you do too much, people get dependent
           on you, and if you do nothing, they lose hope. You have to use a light touch. Like a safecracker, or a
           pickpocket.</p><p>I guess if you want children beaten, you have to do it yourself. You, minion. Lift my arm.
           AFTER HIM! Yeah, lots of people did. Um, is this the boring, peaceful kind of taking to the streets?</p>
           <p>Fry, you can't just sit here in the dark listening to classical music. But I've never been to the moon!
           I'm sure those windmills will keep them cool. You're going to do his laundry?</p><p>Calculon is gonna kill
           us and it's all everybody else's fault! Ummm…to eBay? Hey, whatcha watching? Kif, I have mated with a woman.
           Inform the men. Eeeee! Now say "nuclear wessels"! Oh sure! Blame the wizards!</p><p>Belligerent and numerous.
           Yeah. Give a little credit to our public schools. No, I'm Santa Claus! Pansy. I'll get my kit!</p><p>We don't
           have a brig. One hundred dollars. And why did 'I' have to take a cab? Say it in Russian! I'm sure those
           windmills will keep them cool.</p>`,
    heading: 'Interested in joining?',
    thumb: 'https://media.whhc.uk/public/f64b32e5-2281-4e18-9882-87dc0ae91711.png',
    date: '2018-05-26T14:00:00Z',
    slug: 'join-us',
    video: 'YdaIJTkjPk0',
    photos: [
      { url: '/assets/01.jpg', width: 5184, height: 3456 },
      { url: '/assets/02.jpg', width: 3097, height: 1936 },
      { url: '/assets/03.jpg', width: 4912, height: 2760 },
      { url: '/assets/04.jpg', width: 5184, height: 3456 },
      { url: '/assets/05.jpg', width: 5477, height: 3651 },
      { url: '/assets/06.jpg', width: 2784, height: 1856 },
      { url: '/assets/07.jpg', width: 3744, height: 4900 },
      { url: '/assets/08.jpg', width: 3000, height: 1794 },
      { url: '/assets/09.jpg', width: 3602, height: 5403 },
      { url: '/assets/10.jpg', width: 3024, height: 4032 },
    ],
  },
  {
    heading: 'Ladies\' ones win playoff',
    thumb: 'https://media.whhc.uk/public/f382f884-6048-4c91-a432-f1ad42728d4c.png',
    date: '2018-05-26T13:00:00Z',
    slug: 'playoff',
    photos: [
      { url: '/assets/11.jpg', width: 1961, height: 3486 },
    ],
  },
  {
    heading: 'Summer hockey dates announced',
    thumb: 'https://media.whhc.uk/public/de08a294-8138-4ab6-a0bb-1b43332eb47e.png',
    date: '2018-05-26T12:00:00Z',
    slug: 'summer',
    photos: [
      { url: '/assets/12.jpg', width: 3648, height: 5472 },
      { url: '/assets/13.jpg', width: 3072, height: 2048 },
      { url: '/assets/14.jpg', width: 3219, height: 4828 },
      { url: '/assets/15.jpg', width: 4821, height: 3409 },
      { url: '/assets/16.jpg', width: 6000, height: 4000 },
      { url: '/assets/17.jpg', width: 3000, height: 3009 },
      { url: '/assets/18.jpg', width: 5184, height: 3456 },
    ],
  },
  {
    heading: 'Get you kit ready for the new season',
    thumb: 'https://media.whhc.uk/public/f2c7dc2f-dd26-478b-a458-13ec8d9cdbe0.png',
    date: '2018-05-26T11:00:00Z',
    slug: 'kit',
    photos: [
      { url: '/assets/19.jpg', width: 5184, height: 3456 },
      { url: '/assets/20.jpg', width: 2200, height: 2750 },
      { url: '/assets/21.jpg', width: 2412, height: 1620 },
      { url: '/assets/22.jpg', width: 7952, height: 5304 },
      { url: '/assets/23.jpg', width: 3558, height: 1791 },
      { url: '/assets/24.jpg', width: 3318, height: 4977 },
      { url: '/assets/25.jpg', width: 5188, height: 2810 },
      { url: '/assets/26.jpg', width: 3747, height: 2489 },
      { url: '/assets/27.jpg', width: 4288, height: 2848 },
      { url: '/assets/28.jpg', width: 2000, height: 2000 },
      { url: '/assets/29.jpg', width: 2974, height: 2233 },
    ],
  },
  {
    heading: 'Club day - everything you need to know',
    thumb: 'https://media.whhc.uk/public/54d8f30e-2930-4578-a3ad-4f838d587ef1.png',
    date: '2018-05-26T10:00:00Z',
    slug: 'club-day',
    photos: [
      { url: '/assets/30.jpg', width: 6000, height: 3376 },
      { url: '/assets/31.jpg', width: 4849, height: 3233 },
      { url: '/assets/32.jpg', width: 6000, height: 4000 },
      { url: '/assets/33.jpg', width: 5184, height: 3456 },
      { url: '/assets/34.jpg', width: 5760, height: 3840 },
      { url: '/assets/35.jpg', width: 4896, height: 3264 },
      { url: '/assets/36.jpg', width: 5184, height: 3456 },
      { url: '/assets/37.jpg', width: 3130, height: 4695 },
      { url: '/assets/38.jpg', width: 4752, height: 3168 },
    ],
  },
  {
    background: 'https://media.whhc.uk/public/0cad9291-ba50-4b9d-b951-99fc6bc255d1.png',
    heading: 'Interested in joining?',
    thumb: 'https://media.whhc.uk/public/f64b32e5-2281-4e18-9882-87dc0ae91711.png',
    date: '2017-05-26T14:00:00Z',
    slug: 'xyz',
    photos: [
      { url: '/assets/39.jpg', width: 6240, height: 4160 },
      { url: '/assets/40.jpg', width: 4878, height: 2659 },
      { url: '/assets/41.jpg', width: 2004, height: 3000 },
      { url: '/assets/42.jpg', width: 3456, height: 5184 },
      { url: '/assets/43.jpg', width: 2242, height: 2803 },
      { url: '/assets/44.jpg', width: 2196, height: 2745 },
      { url: '/assets/45.jpg', width: 5184, height: 3456 },
      { url: '/assets/46.jpg', width: 4752, height: 3168 },
      { url: '/assets/47.jpg', width: 3059, height: 2448 },
      { url: '/assets/48.jpg', width: 2616, height: 3488 },
      { url: '/assets/49.jpg', width: 4256, height: 2832 },
      { url: '/assets/50.jpg', width: 2789, height: 3887 },
      { url: '/assets/51.jpg', width: 3682, height: 2454 },
    ],
  },
];

@Injectable()
export class NewsService {

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  loadLatestNews(count?: number): void {
    this.redux.dispatch({type: newsActions.NEWS_FETCH_MANY_REQUEST});

    const articles = tempNews.slice(0, count);

    const httpResponse = Observable.of(articles);

    httpResponse.subscribe(
      (data) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_SUCCESS, articles: data });
      },
      (error) => {
        this.redux.dispatch({ type: newsActions.NEWS_FETCH_MANY_ERROR, error });
      },
    );
  }

  loadArticle(slug: string): void {
    const article = this.redux.select(s =>
      s.news.items.find(a =>
        a.slug === slug
      )
    );

    article.subscribe(a => {
      if (!a) {
        this.redux.dispatch({type: newsActions.NEWS_FETCH_ONE_REQUEST});

        const foundArticle = tempNews.find(tempArticle => tempArticle.slug === slug);

        const httpResponse = Observable.of(foundArticle);

        httpResponse.subscribe(
          (data) => {
            this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_SUCCESS, article: data });
          },
          (error) => {
              this.redux.dispatch({ type: newsActions.NEWS_FETCH_ONE_ERROR, error });
          },
        );
      }
    });
  }
}
