import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PageLoaderService } from './components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {

  public navActive = false;

  constructor(
    private router: Router,
  ) {}

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }

        window.scrollTo(0, 0);

        this.navActive = false;
      });
  }

  public navClick() {
    this.navActive = !this.navActive;
  }
}
