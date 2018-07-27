import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.authService.isAuthenticated();
  }

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
