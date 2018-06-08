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
  @select(s => s.events.pendingRequests + s.tags.pendingRequests > 0) loading: Observable<boolean>;

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
  ) {
    this.initPageLoader();
  }

  ngOnInit() {
    this.tagsService.loadTags();

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;
      this.selectedEvent = params.slug;

      const options: any = {};

      if (this.selectedTag) {
        options.tag = this.selectedTag;
      }

      this.eventsService.loadEvents(options);

      this.ngRedux
        .select(s => s.events.events)
        .subscribe((e) => {
          const now = new Date().toJSON();

          const events = e.reduce((obj, item) => {
            if (!this.selectedTag || item.tags.indexOf(this.selectedTag) >= 0) {
              if (item.end > now) {
                obj.future.push(item);
              } else {
                obj.past.push(item);
              }
            }

            return obj;
          }, { past: [], future: []});

          this.future = events.future;
          this.past = events.past.reverse();
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
