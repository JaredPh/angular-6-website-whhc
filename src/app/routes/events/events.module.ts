import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaModule } from '../../components/media/media.module';

import { SharedModule } from '../../components/shared/shared.module';
import { TagsModule } from '../../components/tags/tags.module';
import { EventDetailGuard } from './event-detail/event-detail.guard';

import { EventsViewRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventsModule } from '../../components/events/events.module';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsGuard } from './events.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MediaModule,
    EventsModule,
    EventsViewRoutingModule,
    TagsModule,
  ],
  providers: [
    EventsGuard,
    EventDetailGuard,
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent,
  ],
})
export class EventsViewModule {}
