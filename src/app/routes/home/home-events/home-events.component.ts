import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from 'ng2-redux';

import { EventsService } from '../../../components/events/events.service';
import { IEvent } from '../../../components/events/events.interfaces';

@Component({
  selector: 'whhc-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.scss']
})
export class HomeEventsComponent implements OnInit {

  @select(['events', 'items']) events: Observable<IEvent[]>;

  constructor(
    private eventsService: EventsService,
  ) {}

  ngOnInit() {
    this.events.subscribe(e => {
      if (e.length === 0) {
        this.eventsService.getLatestEvents(3);
      }
    });
  }
}
