import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageLoaderService } from './components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public loading = true;

  constructor(
    private router: Router,
    private pageLoader: PageLoaderService,
  ) {}

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          (<any>window).ga('set', 'page', event.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
      });
  }
}
