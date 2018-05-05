import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MediaImageGalleryComponent } from './media-image-gallery/media-image-gallery.component';
import { MediaYoutubeComponent } from './media-youtube/media-youtube.component';
import { MediaAvatarComponent } from './media-avatar/media-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MediaAvatarComponent,
    MediaImageGalleryComponent,
    MediaYoutubeComponent,
  ],
  exports: [
    MediaAvatarComponent,
    MediaImageGalleryComponent,
    MediaYoutubeComponent,
  ],
})
export class MediaModule { }
