import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SEOService {

  constructor(
    @Inject(DOCUMENT) private document,
  ) {}

  setCanonicalLink(path) {
    const link: HTMLLinkElement = this.document.getElementById('canonical');

    link.setAttribute('href', `https://whhc.uk${path}`);
  }
}
