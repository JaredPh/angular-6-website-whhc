import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { INews } from '../../../components/news/news.interfaces';
import { NewsService } from '../../../components/news/news.service';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../../../app.store';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IImage } from '../../../components/media/media.interfaces';

@Component({
  selector: 'whhc-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  @select(['news', 'loading']) loading: Observable<boolean>;
  @select(['news', 'loaded']) loaded: Observable<boolean>;

  public article: INews;
  public video: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private redux: NgRedux<IAppState>,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.newsService.loadArticle(params.slug);

      this.redux
        .select(s => s.news.items.find(article => article.slug === params.slug))
        .subscribe((article) => {
          this.article = article;

          if (this.article.video) {
            const url = `https://www.youtube.com/embed/${this.article.video}?rel=0&amp;showinfo=0`;
            this.video = this.sanitizer.bypassSecurityTrustResourceUrl(url);
          }
        });
    });
  }
}
