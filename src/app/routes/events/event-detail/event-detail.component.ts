import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../components/events/events.service';
import { PageLoaderService  } from '../../../components/shared/elements/page-loader/page-loader.service';
import { IAppState } from '../../../app.store';
import { NgRedux, select } from '@angular-redux/store';
import { IEvent } from '../../../components/events/events.interfaces';

@Component({
  selector: 'whhc-event-detail',
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {

  public event: IEvent;
  public similar: IEvent[];

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
      });
  }

  private setSimilar(slug: string): void {
    this.eventsService.loadEvents(slug);

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
