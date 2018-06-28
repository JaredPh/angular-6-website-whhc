import { Location } from '../events/events.models';
import { IImage } from '../media/media.interfaces';

export class PageTree {
  id: number;
  slug: string;
  path: string;
  heading: string;
  children?: PageTree[];
  type: string;

  constructor(data) {
    this.id = data.id;
    this.slug = data.slug;
    this.heading = data.heading;
    this.path = data.path;
    this.type = data.type;

    if (data.children) {
      this.children = data.children.map(c => new PageTree(c));
    }
  }
}

export class PageSummary {
  id: number;
  slug: string;
  heading: string;
  banner: IImage;

  constructor(data) {
    this.id = data.id;
    this.slug = data.slug;
    this.heading = data.heading;
    this.banner = data.banner;
  }
}

export class Page extends PageSummary {
  body: string;
  type: 'custom' | 'location' | 'landing' | 'contacts';
  reference?: any;

  constructor(data) {
    super(data);
    this.body = data.body;
    this.type = data.type;

    switch (data.type) {
      case 'location':
        this.reference = new Location(data.reference);
        break;
      case 'landing':
        this.reference = data.reference.map(c => new PageSummary(c));
    }
  }
}
