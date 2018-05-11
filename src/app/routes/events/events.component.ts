import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { IEvent} from '../../components/events/events.interfaces';
import { EventsService} from '../../components/events/events.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @select(['events', 'tags']) tags: Observable<string[]>;
  @select(s => s.news.pendingRequests > 0) loading: Observable<boolean>;

  public events: IEvent[];

  public selectedEvent: string;
  public selectedTag: string;

  public rows: IEvent[][];

  constructor(
    private eventsService: EventsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();

    this.route.params.subscribe( params => {
      this.eventsService.loadEvents();

      this.selectedTag = params.tag;
      this.selectedEvent = params.slug;

      this.ngRedux
        .select(s => s.events.events)
        .subscribe((events) => {
          this.events = (this.selectedTag)
            ? events.filter(e => e.tags.indexOf(this.selectedTag) >= 0)
            : events;
        });
    });
  }

  public getEventLink(event: IEvent): string[] {
    let url = ['/events'];

    if (this.selectedTag) {
      url = url.concat(['tags', this.selectedTag]);
    }

    if (event.slug !== this.selectedEvent) {
      url.push(event.slug);
    }

    return url;
  }

  private initPageLoader() {
    const message = 'Loading Events...';

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
