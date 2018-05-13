import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from '@angular-redux/store';

import { NewsService } from '../../../components/news/news.service';
import { INews } from '../../../components/news/news.interfaces';

@Component({
  selector: 'whhc-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  @select(['news', 'articles']) news: Observable<INews[]>;

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.newsService.loadLatestArticles(5);
  }

}
