import { Component, Input } from '@angular/core';
import { INews } from '../news.interfaces';

@Component({
  selector: 'whhc-news-featured-card',
  templateUrl: './news-featured-card.component.html',
})
export class NewsFeaturedCardComponent {

  @Input() article: INews;

}

