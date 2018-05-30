import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '../../components/media/media.module';

import { SharedModule } from '../../components/shared/shared.module';

import { EventsViewRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsModule } from '../../components/events/events.module';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MediaModule,
    EventsModule,
    EventsViewRoutingModule,
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent,
  ],
})
export class EventsViewModule {}
