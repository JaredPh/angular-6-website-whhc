// todo: move me!
export class Location {
  id: number;
  heading: string;
  address: string;
  home: boolean;

  map?: any; // todo: improve typing
  transport?: any; // todo: improve typing

  constructor(data: any) {
    this.id = +data.id;
    this.heading = data.heading;
    this.address = data.address;
    this.home = data.home;

    if (data.map) {
      this.map = data.map;
    }

    if (data.transport) {
      this.transport = data.transport;
    }
  }
}

// todo: move me!
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

// todo: move me!
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
  description: string;
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
    this.description = data.description;
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
