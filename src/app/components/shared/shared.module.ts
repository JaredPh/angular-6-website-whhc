import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from './pipes/date/date.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { TagComponent } from './elements/tag/tag.component';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CapitalizePipe,
    DatePipe,
    TagComponent,
  ],
  exports: [
    CapitalizePipe,
    DatePipe,
    TagComponent,
  ],
})
export class SharedModule { }
