import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

import { EventsService } from '../../../components/events/events.service';
import { IEvent } from '../../../components/events/events.interfaces';

@Component({
  selector: 'whhc-home-events',
  templateUrl: './home-events.component.html',
})
export class HomeEventsComponent implements OnInit {

  @select(['events', 'future']) events: Observable<IEvent[]>;

  constructor(
    private eventsService: EventsService,
  ) {}

  ngOnInit() {
    this.eventsService.loadEvents({ count: 3, future: true });
  }
}
