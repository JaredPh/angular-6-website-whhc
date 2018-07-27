import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

import { EventsService } from '../../../../components/events/events.service';
import { Event } from '../../../../components/shared/models/events.models';

@Component({
  selector: 'whhc-home-events',
  templateUrl: './home-events.component.html',
})
export class HomeEventsComponent implements OnInit {

  @select(s => s.events.filter(e => e.end > new Date().toJSON())) events: Observable<Event[]>;

  constructor(
    private eventsService: EventsService,
  ) {}

  ngOnInit() {
    this.eventsService.loadEvents({ count: 4, future: true });
  }
}
