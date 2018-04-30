import { Component, Input } from '@angular/core';
import { INews } from '../../../../components/news/news.interfaces';

@Component({
  selector: 'whhc-home-featured-news-card',
  templateUrl: './home-featured-news-card.component.html',
  styleUrls: ['./home-featured-news-card.component.scss']
})
export class HomeFeaturedNewsCardComponent {

  @Input() article: INews;

}

