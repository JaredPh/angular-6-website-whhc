import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { DatePipe } from './pipes/date/date.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { TagComponent } from './elements/tag/tag.component';
import { PageLoaderComponent } from './elements/page-loader/page-loader.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HttpService } from './services/http.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  declarations: [
    CapitalizePipe,
    DatePipe,
    FooterComponent,
    PageLoaderComponent,
    TagComponent,
  ],
  providers: [
    HttpService,
  ],
  exports: [
    CapitalizePipe,
    DatePipe,
    FooterComponent,
    PageLoaderComponent,
    TagComponent,
  ],
})
export class SharedModule {}
