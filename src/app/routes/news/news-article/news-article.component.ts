import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../components/news/news.service';
import { IAppState } from '../../../app.store';
import { News } from '../../../components/news/news.models';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';
import { SEOService } from '../../../components/shared/services/seo.service';
import * as moment from 'moment';

@Component({
  templateUrl: './news-article.component.html',
})
export class NewsArticleComponent implements OnInit {

  public article: News;
  public similar: News[];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private redux: NgRedux<IAppState>,
    private pageLoader: PageLoaderService,
    private seoService: SEOService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear();

    this.route.params.subscribe( params => {
      this.setArticle(params.slug);
    });
  }

  private setArticle(slug: string): void {
    this.redux.select(s => s.news.find(a => a.slug === slug))
      .subscribe((article: News) => {
        this.article = article;

        this.seoService.setPageTags({
          title: this.article.heading,
          description: this.article.description,
          image: this.article.thumb.url,
          type: 'article',
          published_time: moment(this.article.date).format(),
        });

        if (article) {
          this.setSimilar(article.similar);
        }
      });
  }

  private setSimilar(slugs: string[]): void {
    if (slugs) {
      this.newsService.loadArticles({include: slugs});

      this.redux
        .select(s => s.news.filter(a => slugs.indexOf(a.slug) >= 0))
        .subscribe((articles) => {
          this.similar = articles;
        });
    }
  }
}
