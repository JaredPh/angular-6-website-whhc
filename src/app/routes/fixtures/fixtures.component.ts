import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { IAppState } from '../../app.store';
import { FixturesDay } from '../../components/fixtures/fixtures.models';
import { FixturesService } from '../../components/fixtures/fixtures.service';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';

@Component({
  templateUrl: './fixtures.component.html',
})
export class FixturesComponent implements OnInit {

  @select(s => s.requests.pending > 0) loading: Observable<boolean>;

  public fixtures: any;

  constructor(
    private redux: NgRedux<IAppState>,
    private fixturesService: FixturesService,
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear();

    this.redux.select(s => s.fixtures).subscribe((fixtures) => {
      if (fixtures.length > 0) {
        const obj = _.groupBy(fixtures, 'date');
        this.fixtures = Object.keys(obj).map(date => new FixturesDay(obj[date]));
      } else {
        this.fixturesService.loadFixtures();
      }
    });
  }
}
