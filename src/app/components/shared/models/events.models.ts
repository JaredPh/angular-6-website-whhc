import { Member } from '../../members/members.models';
import { Image } from './images.models';
import { Location } from './locations.models';

export class Event {
  slug: string;
  heading: string;
  description: string;
  body: string;

  start: string;
  end: string;

  thumb: Image;
  background: Image;

  location: Location;
  author: Member;

  tags: string[];

  constructor(data: any) {
    this.slug = data.slug;
    this.heading = data.heading;
    this.description = data.description;
    this.body = data.body;

    this.start = data.start;
    this.end = data.end;

    this.thumb = new Image(data.thumb);
    this.background = new Image(data.background);

    this.location = new Location(data.location);
    this.author = new Member(data.author);

    this.tags = data.tags.map(t => t.name);
  }
}
