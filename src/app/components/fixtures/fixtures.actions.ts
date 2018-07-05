import { Fixture } from './fixtures.models';

export const fixturesActions = {
  FIXTURES_FETCH_MANY_ERROR:   'FIXTURES_FETCH_MANY_ERROR',
  FIXTURES_FETCH_MANY_REQUEST: 'FIXTURES_FETCH_MANY_REQUEST',
  FIXTURES_FETCH_MANY_SUCCESS: 'FIXTURES_FETCH_MANY_SUCCESS',
  FIXTURES_FETCH_ONE_ERROR:    'FIXTURES_FETCH_ONE_ERROR',
  FIXTURES_FETCH_ONE_REQUEST:  'FIXTURES_FETCH_ONE_REQUEST',
  FIXTURES_FETCH_ONE_SUCCESS:  'FIXTURES_FETCH_ONE_SUCCESS',
};

export class FixturesReducerActions {

  constructor(
    private state: Fixture[],
    private action: any,
  ) {}

  public fixturesSuccess() {
    const returnedIds = this.action.fixtures.map(f => f.id);

    const fixtures: Fixture[] = [
      ...this.action.fixtures,
      ...this.state.filter(f => returnedIds.indexOf(f.id) < 0),
    ].sort((a, b) => {
      const getDateTime = (fx) => fx.date + (fx.time ? fx.time : '23:59:59');
      return getDateTime(a).localeCompare(getDateTime(b));
    });

    return fixtures;
  }
}
