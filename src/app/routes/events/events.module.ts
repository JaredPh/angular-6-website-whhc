import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { SharedModule } from '../../components/shared/shared.module';

import { EventsViewRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsModule } from '../../components/events/events.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EventsModule,
    EventsViewRoutingModule,
    ScrollToModule.forRoot(),
  ],
  declarations: [
    EventsComponent,
  ],
})
export class EventsViewModule {}
