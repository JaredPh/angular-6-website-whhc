import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagComponent } from './tag/tag.component';
import { TagsService } from './tags.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    TagsService,
  ],
  declarations: [
    TagComponent
  ],
  exports: [
    TagComponent,
  ],
})
export class TagsModule { }
