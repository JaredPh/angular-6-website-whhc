import { Inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SEOService {

  private SEO_TAG_CLASS = 'seo';

  constructor(
    private meta: Meta,
    @Inject(DOCUMENT) private document,
  ) {}

  public setTags(data: any) {
    this.clearTags();

    const defaults = {
      image: 'https://media.whhc.uk/0df32bd7-bf6f-4a04-b2b0-d8ed21c2cfad.png',
    };

    Object.keys(defaults).forEach(key => {
      if (!data.hasOwnProperty(key)) {
        data[key] = defaults[key];
      }
    });

    this.setPageTags(data);
    this.setOpenGraphTags(data);
    this.setTwitterTags(data);
  }

  private setPageTags(data: any): void {
    const title: HTMLLinkElement = this.document.getElementsByTagName('title')[0];

    const siteName = 'West Hampstead Hockey Club';
    const pageName = (data.title)
      ? `${data.title} | `
      : '';

    title.innerHTML = `${pageName}${siteName}`;

    if (data.description) {
      this.setTag({ name: 'description', content: data.description });
    }
  }

  private setOpenGraphTags(data: any): void {
    const allowedTags = [
      'description',
      'image',
      'title',
      'type',
      'url',
    ];

    const tags = [
      { name: 'og:site_name', content: 'West Hampstead Hockey Club'},
    ];

    Object.keys(data).forEach((key: string) => {
      if (allowedTags.indexOf(key) >= 0) {
        tags.push({name: `og:${key}`, content: data[key]});
      }
    });

    if (data.type === 'article' && data.published_time) {
      tags.push({ name: 'article:published_time', content: data.published_time });
    }

    tags.forEach(t => this.setTag(t));
  }

  private setTwitterTags(data: any): void {
    const allowedTags = [
      'description',
      'image',
      'title',
    ];

    const tags = [
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@WHHCUK' },
      { name: 'twitter:creator', content: '@WHHCUK' },
    ];

    Object.keys(data).forEach((key: string) => {
      if (allowedTags.indexOf(key) >= 0) {
        tags.push({name: `twitter:${key}`, content: data[key]});
      }
    });

    tags.forEach(t => this.setTag(t));
  }

  private clearTags(): void {
    const tags: HTMLLinkElement[] = this.document.getElementsByClassName(this.SEO_TAG_CLASS);

    Array.prototype.forEach.call(tags, (el) => {
      el.remove();
    });
  }

  private setTag(tag) {
    this.meta.addTag({ ...tag, class: this.SEO_TAG_CLASS});
  }
}
