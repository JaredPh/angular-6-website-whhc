import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { IAppState } from '../../../app.store';
import { EventsService } from '../../../components/events/events.service';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';

@Injectable()
export class EventDetailGuard implements CanActivate {

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: EventsService,
    private pageLoader: PageLoaderService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise(resolve => {

      this.pageLoader.set('Loading Event...');

      const slug = next.params.slug;

      this.redux
        .select(s => s.events.find(n => n.slug === slug))
        .subscribe((event) => {
          if (event) {
            resolve(true);
          } else {
            this.newsService.loadEvent(slug);
          }
        });

      this.redux
        .select(s => s.requests.status)
        .subscribe((status) => {
          if (status) {
            this.router.navigate(['/', 'error', status]);
            resolve(false);
          }
        });
    });
  }
}
