import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '../../components/media/media.module';
import { SharedModule } from '../../components/shared/shared.module';
import { PageListCardComponent } from './page-list-card/page-list-card.component';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesGuard } from './pages.guard';
import { PagesContactsComponent } from './pages-contacts/pages-contacts.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MediaModule,
  ],
  providers: [
    PagesGuard,
  ],
  declarations: [
    PagesComponent,
    PageListCardComponent,
    PagesContactsComponent,
  ]
})
export class PagesViewModule {}
