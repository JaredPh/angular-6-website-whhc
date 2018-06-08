import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MediaImageGalleryComponent } from './media-image-gallery/media-image-gallery.component';
import { MediaYoutubeComponent } from './media-youtube/media-youtube.component';
import { MediaAvatarComponent } from './media-avatar/media-avatar.component';
import { MediaLocationComponent } from './media-location/media-location.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    MediaAvatarComponent,
    MediaImageGalleryComponent,
    MediaYoutubeComponent,
    MediaLocationComponent,
  ],
  exports: [
    MediaAvatarComponent,
    MediaImageGalleryComponent,
    MediaYoutubeComponent,
    MediaLocationComponent,
  ],
})
export class MediaModule { }
