import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../components/shared/services/seo.service';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../app.store';

@Component({
  templateUrl: './members.component.html',
})
export class MembersComponent implements OnInit {

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
    private seoService: SEOService,
  ) {
    this.seoService.setTags({
      title: 'Members',
      description: 'Private members area',
    });
  }

  ngOnInit() {
    this.pageLoader.clear();
  }
}
