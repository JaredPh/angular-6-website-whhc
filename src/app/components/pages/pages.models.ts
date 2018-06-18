import { _switch } from 'rxjs-compat/operator/switch';
import { Location } from '../events/events.models';
import { IImage } from '../media/media.interfaces';

export class PageTree {
  slug: string;
  path: string;
  heading: string;
  children?: PageTree[];

  constructor(data) {
    this.slug = data.slug;
    this.heading = data.heading;
    this.path = data.path;

    if (data.children) {
      this.children = data.children.map(c => new PageTree(c));
    }
  }
}

export class PageSummary {
  slug: string;
  heading: string;
  banner: IImage;

  constructor(data) {
    this.slug = data.slug;
    this.heading = data.heading;
    this.banner = data.banner;
  }
}

export class Page extends PageSummary {
  body: string;
  type: 'custom' | 'location' | 'landing';
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
