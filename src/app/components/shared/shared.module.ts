import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { PagesModule } from '../pages/pages.module';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DatePipe } from './pipes/date.pipe';
import { TimePipe } from './pipes/time.pipe';

import { PageLoaderComponent } from './elements/page-loader/page-loader.component';
import { FooterComponent } from './elements/footer/footer.component';
import { HttpService } from './services/http.service';
import { ImageFadeInComponent } from './elements/image-fade-in/image-fade-in.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { WysiwygRoutesDirective } from './directives/wysiwyg-routes.directive';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

const exportedDeclarations = [
  CapitalizePipe,
  DatePipe,
  SafeHtmlPipe,
  TimePipe,
  FooterComponent,
  PageLoaderComponent,
  ImageFadeInComponent,
  NavbarComponent,
  WysiwygRoutesDirective,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    LazyLoadImageModule,
    PagesModule,
  ],
  declarations: [
    ...exportedDeclarations,
  ],
  providers: [
    HttpService,
  ],
  exports: [
    ...exportedDeclarations,
  ],
})
export class SharedModule {}
