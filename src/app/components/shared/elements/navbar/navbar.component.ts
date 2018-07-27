import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IAppState } from '../../../../app.store';
import { PageTree } from '../../models/pages.models';
import { PagesService } from '../../../pages/pages.service';

@Component({
  selector: 'whhc-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  public navActive = false;
  public clubInfoNav: PageTree;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private pagesService: PagesService,
  ) {}

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.navActive = false;
        }
      });

    this.ngRedux
      .select(s => s.pages.trees.find(pt => pt.slug === 'club-info'))
      .subscribe((pageTree) => {
        if (pageTree) {
          this.clubInfoNav = pageTree;
        } else {
          this.pagesService.loadPages();
        }
      });
  }

  public navClick() {
    this.navActive = !this.navActive;
  }
}
