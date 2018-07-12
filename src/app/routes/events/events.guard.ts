import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IAppState } from '../../app.store';
import { EventsService } from '../../components/events/events.service';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { TagsService } from '../../components/tags/tags.service';

@Injectable()
export class EventsGuard implements CanActivate {

  constructor(
    private redux: NgRedux<IAppState>,
    private router: Router,
    private eventsService: EventsService,
    private tagsService: TagsService,
    private pageLoader: PageLoaderService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise(resolve => {
      this.pageLoader.set('Loading Events...');

      this.tagsService.loadTags();

      const tag: string = next.params.tag || null;

      if (tag) {
        this.redux.select(s => s.tags).subscribe((tags) => {
          if (tags.length > 0) {
            if (tags.indexOf(tag) >= 0) {
              this.eventsService.loadEvents({ tag });
              resolve(true);
            } else {
              resolve(false);
              this.router.navigateByUrl('/error/404');
            }
          }
        });
      } else {
        this.eventsService.loadEvents();
        resolve(true);
      }
    });
  }
}
