import { NgModule } from '@angular/core';
import { EventsService } from './events.service';
// import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // CommonModule
  ],
  declarations: [],
  providers: [
    EventsService,
  ],
  exports: [],
})
export class EventsModule { }
