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
