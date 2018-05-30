export class Location {
  id: string;
  heading: string;
  address: string;

  constructor(data: any) {
    this.id = data.id;
    this.heading = data.heading;
    this.address = data.address;
  }
}

export class Image {
  url: string;
  description: string;
  height: number;
  width: number;

  constructor(data: any) {
    this.url = data.url;
    this.description = data.description;
    this.height = data.height;
    this.width = data.width;
  }
}

export class User {
  id: string;
  fname: string;
  lname: string;
  avatar: Image;

  constructor(data: any) {
    this.id = data.id;
    this.fname = data.fname;
    this.lname = data.lname;

    this.avatar = new Image(data.avatar);
  }
}

export class Event {
  slug: string;
  heading: string;
  body: string;

  start: string;
  end: string;

  thumb: Image;
  background: Image;

  location: Location;
  author: User;

  tags: string[];

  constructor(data: any) {
    this.slug = data.slug;
    this.heading = data.heading;
    this.body = data.body;

    this.start = data.start;
    this.end = data.end;

    this.thumb = new Image(data.thumb);
    this.background = new Image(data.background);

    this.location = new Location(data.location);
    this.author = new User(data.author);

    this.tags = data.tags.map(t => t.name);
  }
}
