import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select } from 'ng2-redux';

import { NewsService } from '../../../components/news/news.service';
import { INews } from '../../../components/news/news.interfaces';

@Component({
  selector: 'whhc-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss']
})
export class HomeNewsComponent implements OnInit {

  @select(['news', 'items']) news: Observable<INews[]>;

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.newsService.loadLatestNews(5);
  }

}
