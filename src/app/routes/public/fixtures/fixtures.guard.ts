import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';
import { FixturesService } from '../../../components/fixtures/fixtures.service';
import { ClubsService } from '../../../components/clubs/clubs.service';
import { FixtureOptions } from '../../../components/fixtures/fixtures.interfaces';

@Injectable()
export class FixturesGuard implements CanActivate {

  constructor(
    private pageLoader: PageLoaderService,
    private fixuresService: FixturesService,
    private clubsService: ClubsService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return new Promise(resolve => {
      this.pageLoader.set('Loading Games...');

      this.clubsService.loadClubs();

      const type = state.url.substr(1);
      const options: FixtureOptions = {};

      switch (type) {
        case 'fixtures':
          options.future = true;
          break;
        case 'results':
          options.past = true;
          break;
      }

      this.fixuresService.loadFixtures(options);

      resolve(true);
    });
  }
}
