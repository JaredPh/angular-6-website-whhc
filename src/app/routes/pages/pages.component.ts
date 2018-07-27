import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '../../components/shared/models/locations.models';
import { IAppState } from '../../app.store';
import { Page, PageTree } from '../../components/shared/models/pages.models';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { SEOService } from '../../components/shared/services/seo.service';

@Component({
  selector: 'whhc-pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public nav: PageTree;
  public path: string;
  public page: Page;
  public location: Location;

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private pageLoader: PageLoaderService,
    private seoService: SEOService,
  ) {
    this.pageLoader.clear();
  }

  ngOnInit() {
    this.path = this.router.url;

    this.redux
      .select(s => s.pages.currentTree)
      .subscribe(tree => this.nav = tree);

    this.route.params.subscribe( params => {
      const slug = params.slug;

      this.redux
        .select(s => s.pages.pages.find(p => p.slug === slug))
        .subscribe((page) => {
          this.page = page;

          if (page) {
            this.seoService.setTags({
              title: this.page.heading,
              description: this.page.description,
            });
          }
        });
    });
  }
}
