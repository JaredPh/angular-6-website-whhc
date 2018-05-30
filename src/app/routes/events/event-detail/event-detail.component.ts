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
    this.initPageLoader();

    this.route.params.subscribe( params => {
      this.setEvent(params.slug);
      this.setSimilar(params.slug);
    });
  }


  private setEvent(slug: string): void {
    this.eventsService.loadEvent(slug);

    this.redux
      .select(s => [...s.events.future, ...s.events.past].find(a => a.slug === slug))
      .subscribe((event) => {
        this.event = event;

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
        }
      });
  }

  private setSimilar(slug: string): void {
    this.eventsService.loadEvents({ count: 6, future: true, exclude: slug });

    this.redux
      .select(s => s.events.future.filter(a => a.slug !== slug))
      .subscribe((events) => {
        this.similar = events.slice(0, 6);
      });
  }

  private initPageLoader() {
    const message = 'Loading Event...';

    this.pageLoader.set(message);

    this.pageLoader.clear();
  }
}
