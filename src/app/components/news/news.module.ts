import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TagsModule } from '../tags/tags.module';

import { NewsService } from './news.service';
import { NewsBasicCardComponent } from './news-basic-card/news-basic-card.component';

@NgModule({
  declarations: [
    NewsBasicCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TagsModule,
  ],
  providers: [
    NewsService,
  ],
  exports: [
    NewsBasicCardComponent,
  ],
})
export class NewsModule { }


