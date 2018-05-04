import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsComponent } from './news.component';
import { NewsModule } from '../../components/news/news.module';
import { UtilsModule } from '../../components/utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    NewsModule,
    UtilsModule,
  ],
  declarations: [
    NewsComponent,
    NewsArticleComponent,
  ],
})
export class NewsViewModule { }
