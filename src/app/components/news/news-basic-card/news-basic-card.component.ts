import { Component, Input } from '@angular/core';
import { INews } from '../news.interfaces';

@Component({
  selector: 'whhc-news-basic-card',
  templateUrl: './news-basic-card.component.html',
  styleUrls: ['./news-basic-card.component.scss']
})
export class HomeBasicNewsCardComponent {

  @Input() article: INews;

}
