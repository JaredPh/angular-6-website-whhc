import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { NewsService } from '../../components/news/news.service';
import { INews } from '../../components/news/news.interfaces';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';

@Component({
  selector: 'whhc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @select(['news', 'tags']) tags: Observable<string[]>;
  @select(['news', 'loading']) loading: Observable<boolean>;

  public articles: INews[];
  public selectedTag: string;

  constructor(
    private newsService: NewsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();

    this.newsService.loadTags();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      if (this.selectedTag) {
        this.newsService.loadArticlesByTag(this.selectedTag, 20);
      } else {
        this.newsService.loadLatestArticles(20);
      }

      this.ngRedux
        .select(s => s.news.articles)
        .subscribe((articles) => {
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
