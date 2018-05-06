import { Component, Input } from '@angular/core';
import { INews } from '../news.interfaces';

@Component({
  selector: 'whhc-news-featured-card',
  templateUrl: './news-featured-card.component.html',
  styleUrls: ['./news-featured-card.component.scss']
})
export class NewsFeaturedCardComponent {

  @Input() article: INews;

}

