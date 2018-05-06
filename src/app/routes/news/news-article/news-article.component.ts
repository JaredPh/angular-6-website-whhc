import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../components/news/news.service';
import { IAppState } from '../../../app.store';
import { INews } from '../../../components/news/news.interfaces';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  @select(['news', 'loading']) loading: Observable<boolean>;
  @select(['news', 'loaded']) loaded: Observable<boolean>;

  public article: INews;
  public similar: INews[];

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
      .select(s => s.news.items.find(a => a.slug === slug))
      .subscribe((article) => {
        this.article = article;
        this.setSimilar(article.similar);
      });
  }

  private setSimilar(slugs: string[]): void {
    this.newsService.loadArticles(slugs);

    this.redux
      .select(s => s.news.items.filter(a => slugs.indexOf(a.slug) >= 0))
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
