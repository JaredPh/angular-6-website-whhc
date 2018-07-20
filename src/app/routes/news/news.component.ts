import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { News } from '../../components/news/news.models';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { SEOService } from '../../components/shared/services/seo.service';

@Component({
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {

  @select(s => s.tags) tags: Observable<string[]>;

  public articles: News[];
  public selectedTag: string;

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
    private seoService: SEOService,
  ) {
    this.seoService.setTags({
      title: 'News',
      description: 'Find out what\'s happening around the club as well as the whole hockey community',
    });
  }

  ngOnInit() {
    this.pageLoader.clear();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      this.redux
        .select(s => s.news)
        .subscribe((articles) => {
          this.articles = (this.selectedTag)
            ? articles.filter(a => a.tags.indexOf(this.selectedTag) >= 0)
            : articles;
        });
    });
  }
}
