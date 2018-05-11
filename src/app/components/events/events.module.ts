import { NgModule } from '@angular/core';
import { EventsService } from './events.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventsCardComponent } from './events-event-card/events-event-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    EventsCardComponent,
  ],
  providers: [
    EventsService,
  ],
  exports: [
    EventsCardComponent,
  ],
})
export class EventsModule { }
