import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from './pipes/date/date.pipe';
import { UrlRootPipe } from './pipes/url/urlToRoot.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe,
    DatePipe,
    UrlRootPipe,
  ],
  exports: [
    CapitalizePipe,
    DatePipe,
    UrlRootPipe,
  ],
})
export class UtilsModule { }
