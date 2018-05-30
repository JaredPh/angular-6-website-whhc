import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { Event} from '../../components/events/events.models';
import { EventsService} from '../../components/events/events.service';
import { TagsService } from '../../components/tags/tags.service';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @select(['tags', 'items']) tags: Observable<string[]>;
  @select(s => s.news.pendingRequests > 0) loading: Observable<boolean>;

  public future: Event[];
  public past: Event[];

  public selectedEvent: string;
  public selectedTag: string;

  constructor(
    private eventsService: EventsService,
    private tagsService: TagsService,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();
    this.tagsService.loadTags();

    this.route.params.subscribe( params => {
      this.eventsService.loadEvents();

      this.selectedTag = params.tag;
      this.selectedEvent = params.slug;

      this.ngRedux
        .select(s => s.events.future)
        .subscribe((events) => {
          this.future = (this.selectedTag)
            ? events.filter(e => e.tags.indexOf(this.selectedTag) >= 0)
            : events;
        });

      this.ngRedux
        .select(s => s.events.past)
        .subscribe((events) => {
          this.past = (this.selectedTag)
            ? events.filter(e => e.tags.indexOf(this.selectedTag) >= 0)
            : events;
        });
    });
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
