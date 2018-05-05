import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from './pipes/date/date.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { TagsPipe } from './pipes/tags/tags.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe,
    DatePipe,
    TagsPipe,
  ],
  exports: [
    CapitalizePipe,
    DatePipe,
    TagsPipe,
  ],
})
export class UtilsModule { }
