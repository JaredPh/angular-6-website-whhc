import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../components/news/news.service';
import { IAppState } from '../../../app.store';
import { News } from '../../../components/news/news.models';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';

@Component({
  templateUrl: './news-article.component.html',
})
export class NewsArticleComponent implements OnInit {

  @select(s => s.news.pendingRequests > 0) loading: Observable<boolean>;

  public article: News;
  public similar: News[];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private redux: NgRedux<IAppState>,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();

    this.route.params.subscribe( params => {
      this.setArticle(params.slug);
    });
  }

  private setArticle(slug: string): void {
    this.newsService.loadArticle(slug);

    this.redux
      .select(s => s.news.articles.find(a => a.slug === slug))
      .subscribe((article) => {
        this.article = article;

        if (article) {
          this.setSimilar(article.similar);
        }
      });
  }

  private setSimilar(slugs: string[]): void {
    // this.newsService.loadArticles(slugs);

    this.redux
      .select(s => s.news.articles.filter(a => slugs.indexOf(a.slug) >= 0))
      .subscribe((articles) => {
        this.similar = articles;
      });
  }

  private initPageLoader() {
    const message = 'Loading Article...';

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
