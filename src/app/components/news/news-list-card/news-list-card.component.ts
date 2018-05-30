import { Component, Input } from '@angular/core';
import { News } from '../news.models';

@Component({
  selector: 'whhc-news-list-card',
  templateUrl: './news-list-card.component.html',
})
export class NewsListCardComponent {

  @Input() article: News;

}
