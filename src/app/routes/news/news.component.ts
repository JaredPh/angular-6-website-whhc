import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { NewsService } from '../../components/news/news.service';
import { INews } from '../../components/news/news.interfaces';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'whhc-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @select(['news', 'tags']) tags: string[];

  public articles: INews[];
  public selectedTag: string;

  constructor(
    private newsService: NewsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.newsService.loadTags();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;

      if (this.selectedTag) {
        this.newsService.loadArticlesByTag(this.selectedTag, 20);
      } else {
        this.newsService.loadLatestArticles(20);
      }

      this.ngRedux
        .select(s => s.news.items)
        .subscribe((articles) => {
          this.articles = (this.selectedTag)
            ? articles.filter(a => a.tags.indexOf(this.selectedTag) >= 0)
            : articles;
        });
    });
  }
}
