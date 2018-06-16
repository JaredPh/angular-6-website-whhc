import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesGuard } from './pages.guard';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  providers: [
    PagesGuard,
  ],
  declarations: [
    PagesComponent,
  ]
})
export class PagesViewModule {}
