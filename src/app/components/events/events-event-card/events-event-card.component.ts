import { Component, Input } from '@angular/core';
import { IEvent } from '../events.interfaces';
import * as moment from 'moment';

@Component({
  selector: 'whhc-event-card',
  templateUrl: './events-event-card.component.html',
})
export class EventsCardComponent {

  @Input() event: IEvent;

  public getDateRange(event: IEvent): string {
    const sameDayLimit = moment(event.start).add(1, 'day').set('hour', 6).utc().format();

    const sameDay = event.end < sameDayLimit;

    if (sameDay) {
      return moment(event.start).format('ddd, Do MMMM YYYY');
    } else {
      const sameMonth = moment(event.start).isSame(event.end, 'month');

      if (sameMonth) {
        return `${moment(event.start).format('ddd Do')} - ${moment(event.end).format('Do MMMM YYYY')}`;
      } else {
        return `${moment(event.start).format('ddd, Do MMMM')} - ${moment(event.end).format('Do MMMM YYYY')}`;
      }
    }
  }
}
