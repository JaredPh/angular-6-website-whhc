import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { HttpService } from '../shared/services/http.service';
import { fixturesActions } from './fixtures.actions';
import { Fixture } from './fixtures.models';
import { FixtureOptions } from './fixtures.interfaces';

@Injectable()
export class FixturesService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public async loadFixtures(options?: FixtureOptions): Promise<void> {
    this.redux.dispatch({type: fixturesActions.FIXTURES_FETCH_MANY_REQUEST});

    const httpResponse = this.httpService.get('/games', options);

    httpResponse.subscribe(
      (data: any) => {
        const fixtures: Event[] = data.results.map(f => new Fixture(f));

        this.redux.dispatch({type: fixturesActions.FIXTURES_FETCH_MANY_SUCCESS, fixtures});
      },
      (error) => {
        this.redux.dispatch({type: fixturesActions.FIXTURES_FETCH_MANY_ERROR, error});
      },
    );
  }
}
