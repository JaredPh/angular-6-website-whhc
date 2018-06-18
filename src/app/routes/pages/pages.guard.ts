import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { pagesActions } from '../../components/pages/pages.actions';
import { PageTree } from '../../components/pages/pages.models';
import { PagesService } from '../../components/pages/pages.service';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';

@Injectable()
export class PagesGuard implements CanActivate {

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private pageLoader: PageLoaderService,
    private pagesService: PagesService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(resolve => {
      this.pageLoader.set('Loading page...');

      const urlSegments = next.url;

      const url = `/${urlSegments.map(s => s.path).join('/')}`;

      this.redux.select(s => s.pages.trees).subscribe((pageTrees) => {

        const findSegmentMatch = (pt, i) => pt.find((z) => z.slug === urlSegments[i].path);

        let currentIndex = 0;
        let currentMatch: PageTree;
        let currentTrees: PageTree[] = pageTrees;

        while ((currentMatch && currentMatch.path !== url) || currentIndex === 0) {
          currentMatch = findSegmentMatch(currentTrees, currentIndex);

          if (currentMatch) {
            currentTrees = currentMatch.children;

            if (currentIndex === 0) {
              this.redux.dispatch({ type: pagesActions.PAGE_TREES_SET_CURRENT, tree: currentMatch });
            }
          }

          currentIndex += 1;
        }

        if (currentMatch) {
          this.pagesService.loadPage(currentMatch.id);
          resolve(true);
        } else {
          this.router.navigateByUrl('/error/404');
          resolve(false);
        }
      });
    });
  }
}
