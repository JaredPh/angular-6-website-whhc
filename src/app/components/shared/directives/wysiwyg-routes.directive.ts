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
    const externalLink = /^(http|mailto).*/i;
    const destination = event.target.getAttribute('href');

    event.preventDefault();

    if (event.target.tagName === 'A') {
      if (!externalLink.test(destination)) {
        this.router.navigate([destination]);
      } else {
        window.open(destination, '_blank');
      }
    }
  }
}
