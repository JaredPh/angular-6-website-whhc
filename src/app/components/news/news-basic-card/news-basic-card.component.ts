import { Component, Input } from '@angular/core';
import { INews } from '../news.interfaces';

@Component({
  selector: 'whhc-news-basic-card',
  templateUrl: './news-basic-card.component.html',
})
export class NewsBasicCardComponent {

  @Input() article: INews;

}
