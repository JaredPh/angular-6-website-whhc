import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { DatePipe } from './pipes/date/date.pipe';
import { TimePipe } from './pipes/time/time.pipe';

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
    TimePipe,
    FooterComponent,
    PageLoaderComponent,
  ],
  providers: [
    HttpService,
  ],
  exports: [
    CapitalizePipe,
    DatePipe,
    TimePipe,
    FooterComponent,
    PageLoaderComponent,
  ],
})
export class SharedModule {}
