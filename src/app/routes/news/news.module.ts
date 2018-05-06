import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaModule } from '../../components/media/media.module';
import { NewsModule } from '../../components/news/news.module';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../../components/shared/shared.module';

import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsComponent } from './news.component';

@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    NewsModule,
    NewsRoutingModule,
    SharedModule,
  ],
  declarations: [
    NewsArticleComponent,
    NewsComponent,
  ],
})
export class NewsViewModule { }
