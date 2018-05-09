import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { EventsService } from '../../components/events/events.service';
import { IEvent } from '../../components/events/events.interfaces';

@Component({
  selector: 'whhc-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @select(['events', 'tags']) tags: Observable<string[]>;
  @select(s => s.events.pendingRequests > 0) loading: Observable<boolean>;

  public events: IEvent[];
  public selectedTag: string;

  constructor(
    private eventsService: EventsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;
      // this.eventsService.loadEvents();

      this.ngRedux
        .select(s => s.events.events)
        .subscribe((events) => {
          this.events = (this.selectedTag)
            ? events.filter(e => e.tags.indexOf(this.selectedTag) >= 0)
            : events;
        });
    });
  }

  private initPageLoader() {
    const message = 'Loading Articles...';

    this.pageLoader.set(message);

    this.loading.subscribe((isLoading) => {
      if (isLoading) {
        this.pageLoader.set(message);
      } else {
        this.pageLoader.clear();
      }
    });
  }
}
