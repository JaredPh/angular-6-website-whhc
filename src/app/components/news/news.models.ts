import { Image, User } from '../events/events.models';

export class News {
  slug: string;
  heading: string;
  body: string;
  date: string;

  thumb: Image;
  background: Image;
  photos: Image[];

  video?: string = null;

  author: User;

  similar: string[];
  tags: string[];

  constructor(data: any) {
    this.slug = data.slug;
    this.heading = data.heading;
    this.body = data.body;
    this.date = data.date;

    this.thumb = new Image(data.thumb);
    this.background = new Image(data.background);
    this.photos = data.photos.map(i => new Image(i));

    if (data.video) {
      this.video = data.video;
    }

    this.author = new User(data.author);

    this.similar = data.similar;
    this.tags = data.tags.map(t => t.name);
  }
}
