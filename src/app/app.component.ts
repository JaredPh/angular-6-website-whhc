import { SwUpdate } from '@angular/service-worker';
import { AfterViewInit, Component} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SEOService } from './components/shared/services/seo.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {

  constructor(
    private swUpdate: SwUpdate,
    private router: Router,
    private seoService: SEOService,
  ) {}

  ngAfterViewInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        console.log('service worker updated');
      });

      this.swUpdate.checkForUpdate()
        .then(() => {})
        .catch((err) => {
          console.error('error when checking for update', err);
        });
    }

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.seoService.setCanonicalLink(event.urlAfterRedirects);

          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      });
  }
}
