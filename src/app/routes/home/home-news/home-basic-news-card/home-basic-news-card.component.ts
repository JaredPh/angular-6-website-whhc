import { Component, Input } from '@angular/core';
import { INews } from '../../../../components/news/news.interfaces';

@Component({
  selector: 'whhc-home-basic-news-card',
  templateUrl: './home-basic-news-card.component.html',
  styleUrls: ['./home-basic-news-card.component.scss']
})
export class HomeBasicNewsCardComponent {

  @Input() article: INews;

}
