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

  @select(['tags', 'items']) tags: Observable<string[]>;
  @select(s => s.news.pendingRequests + s.tags.pendingRequests > 0) loading: Observable<boolean>;

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
    this.initPageLoader();

    this.tagsService.loadTags();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      // Todo: implement by Tag
      if (this.selectedTag) {
        this.newsService.loadArticles();
      } else {
        this.newsService.loadArticles(20);
      }

      this.ngRedux
        .select(s => s.news.articles)
        .subscribe((articles) => {
          console.log('selected TAG', this.selectedTag);
          this.articles = (this.selectedTag)
            ? articles.filter(a => a.tags.indexOf(this.selectedTag) >= 0)
            : articles;
        });
    });
  }

  private initPageLoader() {
    const message = 'Loading Articles...';

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
