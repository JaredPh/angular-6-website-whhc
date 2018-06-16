import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { IAppState } from '../../../app.store';
import { NewsService } from '../../../components/news/news.service';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';

@Injectable()
export class NewsArticleGuard implements CanActivate {

  constructor(
    private redux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private pageLoader: PageLoaderService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise(resolve => {

      this.pageLoader.set('Loading Article...');

      const slug = next.params.slug;

      this.redux
        .select(s => s.news.find(n => n.slug === slug))
        .subscribe((article) => {
          if (article) {
            setTimeout(() => {
              resolve(true);
            }, 400);
          } else {
            this.newsService.loadArticle(slug);
          }
      });
    });
  }
}
