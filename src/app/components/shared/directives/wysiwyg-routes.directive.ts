import { Directive, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[whhcWYSIWYG]'
})
export class WysiwygRoutesDirective {

  constructor(
    private el: ElementRef,
    private router: Router,
  ) {}

  @HostListener('click', ['$event'])
  public onClick(event) {
    const externalLink = /^http.*/i;
    const internalLink = /^\/.*/;
    const destination = event.target.getAttribute('href');

    if (event.target.tagName === 'A') {
      if (externalLink.test(destination) || internalLink.test(destination)) {
        event.preventDefault();

        if (externalLink.test(destination)) {
          window.open(destination, (/^(http).*/i) ? '_blank' : '');
        } else {
          this.router.navigate([destination]);
        }
      }
    }
  }
}
