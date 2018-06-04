import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaModule } from '../../components/media/media.module';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';

@NgModule({
  imports: [
    CommonModule,
    MediaModule,
    PhotosRoutingModule,
    RouterModule,
  ],
  declarations: [PhotosComponent]
})
export class PhotosViewModule {}
