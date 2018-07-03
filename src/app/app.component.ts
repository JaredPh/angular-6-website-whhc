import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SEOService } from './components/shared/services/seo.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {

  constructor(
    private router: Router,
    private seoService: SEOService,
  ) {}

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {

          console.log('====>', event.urlAfterRedirects);
          this.seoService.setCanonicalLink(event.urlAfterRedirects);

          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      });
  }
}
