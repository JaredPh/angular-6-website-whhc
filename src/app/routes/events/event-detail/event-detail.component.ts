import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../components/events/events.service';
import { PageLoaderService  } from '../../../components/shared/elements/page-loader/page-loader.service';
import { IAppState } from '../../../app.store';
import { NgRedux } from '@angular-redux/store';
import { Event } from '../../../components/events/events.models';
import * as moment from 'moment';

@Component({
  selector: 'whhc-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {

  public event: Event;
  public similar: Event[];

  public startDateFormat: string;
  public endDateFormat: string;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private redux: NgRedux<IAppState>,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear();

    this.route.params.subscribe( params => {
      this.setEvent(params.slug);
    });
  }

  private setEvent(slug: string): void {
    this.eventsService.loadEvents({ count: 6, future: true, exclude: slug });

    this.redux
      .select(s => s.events)
      .subscribe((events) => {
        const event = events.find(a => a.slug === slug);

        if (event) {
          if (moment(event.start).isSame(event.end, 'day')) {
            this.startDateFormat = 'dddd, Do of MMMM YYYY';
            this.endDateFormat = null;
          } else if (moment(event.start).isSame(event.end, 'month')) {
            this.startDateFormat = 'dddd, Do';
            this.endDateFormat = ' - Do of MMMM YYYY';
          } else {
            this.startDateFormat = 'dddd, Do of MMMM';
            this.endDateFormat = ' - Do of MMMM YYYY h:mma';
          }

          this.event = event;

          const now = moment();

          this.similar = events
            .filter(a => moment(a.end).diff(now) > 0 && a.slug !== slug)
            .slice(0, 6);
        }
      });
  }
}
