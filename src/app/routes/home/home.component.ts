import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IEvent } from '../../components/events/events.interfaces';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { EventsService } from '../../components/events/events.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  public getDateRange(event: IEvent): string {
    const sameDayLimit = moment(event.start).add(1, 'day').set('hour', 6).utc().format();

    const sameDay = event.end < sameDayLimit;

    if (sameDay) {
      return moment(event.start).format('ddd, Do MMMM YYYY');
    } else {
      const sameMonth = moment(event.start).isSame(event.end, 'month');

      if (sameMonth) {
        return `${moment(event.start).format('dddd Do')} - ${moment(event.end).format('Do MMMM YYYY')}`;
      } else {
        return `${moment(event.start).format('ddd, Do MMMM')} - ${moment(event.end).format('Do MMMM YYYY')}`;
      }
    }
  }

  public sayHello() {
    alert('hello');
  }

}
