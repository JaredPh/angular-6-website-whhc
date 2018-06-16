import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public msg?: string;

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private pageLoader: PageLoaderService,
  ) {
    this.initPageLoader();
  }

  ngOnInit() {
    this.route.params.subscribe((params) =>  {
      const url = params.slug;
          this.msg = `found ${url}`;
    });
  }

  private initPageLoader() {
    const message = 'Loading Page...';

    this.pageLoader.set(message);

    this.loading.subscribe((isLoading) => {
      if (isLoading) {
        this.pageLoader.set(message);
      } else {
        this.pageLoader.clear();
      }
    });
  }
}
