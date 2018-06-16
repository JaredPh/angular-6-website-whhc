import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { NewsService } from '../../components/news/news.service';
import { News } from '../../components/news/news.models';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { TagsService } from '../../components/tags/tags.service';

@Component({
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {

  @select(s => s.tags) tags: Observable<string[]>;

  public articles: News[];
  public selectedTag: string;

  constructor(
    private newsService: NewsService,
    private tagsService: TagsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      this.ngRedux
        .select(s => s.news)
        .subscribe((articles) => {
          this.articles = (this.selectedTag)
            ? articles.filter(a => a.tags.indexOf(this.selectedTag) >= 0)
            : articles;
        });
    });
  }
}
