import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'whhc-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public navActive = false;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.navActive = false;
        }
      });
  }

  public navClick() {
    this.navActive = !this.navActive;
  }
}
