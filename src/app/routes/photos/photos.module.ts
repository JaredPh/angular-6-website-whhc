import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaModule } from '../../components/media/media.module';
import { NewsModule } from '../../components/news/news.module';
import { SharedModule } from '../../components/shared/shared.module';
import { TagsModule } from '../../components/tags/tags.module';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';

@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    NewsModule,
    PhotosRoutingModule,
    RouterModule,
    SharedModule,
    TagsModule,
  ],
  declarations: [PhotosComponent]
})
export class PhotosViewModule {}
