import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import { NewsService } from '../../../components/news/news.service';
import { News } from '../../../components/news/news.models';

@Component({
  selector: 'whhc-home-news',
  templateUrl: './home-news.component.html',
})
export class HomeNewsComponent implements OnInit {

  @select(['news', 'articles']) news: Observable<News[]>;

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    const options: any = {
      count: 7,
    };

    this.newsService.loadArticles(options);
  }

}
