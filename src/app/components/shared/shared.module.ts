import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from './pipes/date/date.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { TagComponent } from './elements/tag/tag.component';
import { RouterModule} from '@angular/router';
import { PageLoaderComponent } from './elements/page-loader/page-loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CapitalizePipe,
    DatePipe,
    TagComponent,
    PageLoaderComponent,
  ],
  exports: [
    CapitalizePipe,
    DatePipe,
    TagComponent,
    PageLoaderComponent,
  ],
})
export class SharedModule {}
