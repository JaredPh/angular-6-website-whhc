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
           p>Fry, you can't just sit here in the dark listening to classical music. But I've never been to the moon!
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
      'http://via.placeholder.com/500x500?text=One',
      'http://via.placeholder.com/500x500?text=Two',
      'http://via.placeholder.com/500x500?text=Three',
      'http://via.placeholder.com/500x500?text=Four',
      'http://via.placeholder.com/500x500?text=Five',
      'http://via.placeholder.com/500x500?text=Six',
      'http://via.placeholder.com/500x500?text=Seven',
      'http://via.placeholder.com/500x500?text=Eight',
      'http://via.placeholder.com/500x500?text=Nine',
      'http://via.placeholder.com/500x500?text=Ten',
      'http://via.placeholder.com/500x500?text=Eleven',
      // 'http://via.placeholder.com/500x500?text=Twelve',
    ],
  },
  {
    heading: 'Ladies\' ones win playoff',
    thumb: 'https://media.whhc.uk/public/f382f884-6048-4c91-a432-f1ad42728d4c.png',
    date: '2018-05-26T13:00:00Z',
    slug: 'playoff',
  },
  {
    heading: 'Summer hockey dates announced',
    thumb: 'https://media.whhc.uk/public/de08a294-8138-4ab6-a0bb-1b43332eb47e.png',
    date: '2018-05-26T12:00:00Z',
    slug: 'summer',
  },
  {
    heading: 'Get you kit ready for the new season',
    thumb: 'https://media.whhc.uk/public/f2c7dc2f-dd26-478b-a458-13ec8d9cdbe0.png',
    date: '2018-05-26T11:00:00Z',
    slug: 'kit',
  },
  {
    heading: 'Club day - everything you need to know',
    thumb: 'https://media.whhc.uk/public/54d8f30e-2930-4578-a3ad-4f838d587ef1.png',
    date: '2018-05-26T10:00:00Z',
    slug: 'club-day',
  },
  {
    background: 'https://media.whhc.uk/public/0cad9291-ba50-4b9d-b951-99fc6bc255d1.png',
    heading: 'Interested in joining?',
    thumb: 'https://media.whhc.uk/public/f64b32e5-2281-4e18-9882-87dc0ae91711.png',
    date: '2017-05-26T14:00:00Z',
    slug: 'xyz',
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

        console.log('fa', foundArticle, slug);

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
