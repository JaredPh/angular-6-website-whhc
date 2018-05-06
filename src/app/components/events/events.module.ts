import { NgModule } from '@angular/core';
import { EventsService } from './events.service';
// import { CommonModule } from '@angular/common';

@NgModule({
  providers: [
    EventsService,
  ],
})
export class EventsModule { }
