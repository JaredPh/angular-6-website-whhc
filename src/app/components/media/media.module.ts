import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaImageGalleryComponent } from './media-image-gallery/media-image-gallery.component';
import { MediaYoutubeComponent } from './media-youtube/media-youtube.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MediaImageGalleryComponent,
    MediaYoutubeComponent,
  ],
  exports: [
    MediaImageGalleryComponent,
    MediaYoutubeComponent,
  ],
})
export class MediaModule { }
