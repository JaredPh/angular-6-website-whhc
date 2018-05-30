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
    this.newsService.loadArticles();
  }

}
