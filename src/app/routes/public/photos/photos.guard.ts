import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { IAppState } from '../../../app.store';
import { NewsService } from '../../../components/news/news.service';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';
import { TagsService } from '../../../components/tags/tags.service';

@Injectable()
export class PhotosGuard implements CanActivate {

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private tagsService: TagsService,
    private pageLoader: PageLoaderService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise(resolve => {
      this.pageLoader.set('Loading Photos...');

      this.tagsService.loadTags();

      const tag: string = next.params.tag || null;

      if (tag) {
        this.redux.select(s => s.tags).subscribe((tags) => {
          if (tags.length > 0) {
            if (tags.indexOf(tag) >= 0) {
              this.newsService.loadArticles({ photos: true, tag });
              resolve(true);
            } else {
              resolve(false);
              this.router.navigateByUrl('/error/404');
            }
          }
        });
      } else {
        this.newsService.loadArticles({ photos: true });
        resolve(true);
      }
    });
  }
}
