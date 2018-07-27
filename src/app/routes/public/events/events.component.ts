import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../../app.store';
import { ActivatedRoute } from '@angular/router';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';
import { SEOService } from '../../../components/shared/services/seo.service';
import { Event } from '../../../components/shared/models/events.models';

@Component({
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @select(s => s.tags) tags: Observable<string[]>;
  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public future: Event[];
  public past: Event[];

  public selectedEvent: string;
  public selectedTag: string;

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private pageLoader: PageLoaderService,
    private seoService: SEOService,
  ) {
    this.seoService.setTags({
      title: 'Events',
      description: 'Find out what\'s on, socials, tours and more...',
    });
  }

  ngOnInit() {
    this.loading.subscribe((isLoading) => {
      if (isLoading) {
        this.pageLoader.clear();
      }
    });

    this.route.params.subscribe( params => {
      this.selectedTag = params.tag;
      this.selectedEvent = params.slug;

      this.redux
        .select(s => s.events)
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
}