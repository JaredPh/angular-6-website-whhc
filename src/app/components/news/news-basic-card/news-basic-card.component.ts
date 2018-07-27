import { Component, Input } from '@angular/core';
import { News } from '../../shared/models/news.models';

@Component({
  selector: 'whhc-news-basic-card',
  templateUrl: './news-basic-card.component.html',
})
export class NewsBasicCardComponent {

  @Input() article: News;

}
