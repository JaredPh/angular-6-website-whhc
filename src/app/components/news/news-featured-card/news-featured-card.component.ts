import { Component, Input } from '@angular/core';
import { News } from '../news.models';

@Component({
  selector: 'whhc-news-featured-card',
  templateUrl: './news-featured-card.component.html',
})
export class NewsFeaturedCardComponent {

  @Input() article: News;

}

