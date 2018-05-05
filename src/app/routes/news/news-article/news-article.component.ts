import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { NewsService } from '../../../components/news/news.service';

import { IAppState } from '../../../app.store';
import { INews } from '../../../components/news/news.interfaces';

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
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.newsService.loadArticle(params.slug);
      this.redux
        .select(s => s.news.items.find(a => a.slug === params.slug))
        .subscribe((article) => {
          this.article = article;
          this.setSimilar(article.similar);
        });
    });
  }

  private setSimilar(slugs: string[]): void {
    slugs.forEach(slug => this.newsService.loadArticle(slug));

    this.redux
      .select(s => s.news.items.filter(a => slugs.indexOf(a.slug) >= 0))
      .subscribe((articles) => {
        this.similar = articles;
      });
  }
}
