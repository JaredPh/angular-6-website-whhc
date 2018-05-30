import { Component, Input } from '@angular/core';
import { INews } from '../news.interfaces';

@Component({
  selector: 'whhc-news-list-card',
  templateUrl: './news-list-card.component.html',
})
export class NewsListCardComponent {

  @Input() article: INews;

}
