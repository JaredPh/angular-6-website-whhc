import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { PageTree } from '../../components/pages/pages.models';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public nav: PageTree;
  public currentPath: string;

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private pageLoader: PageLoaderService,
  ) {
    this.pageLoader.clear();
  }

  ngOnInit() {
    this.currentPath = this.router.url;

    this.redux
      .select(s => s.pages.currentTree)
      .subscribe(tree => this.nav = tree);
  }
}
