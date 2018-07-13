import { Fixture } from '../fixtures/fixtures.models';
import { Club } from './clubs.models';

export const clubsActions = {
  CLUBS_FETCH_MANY_REQUEST: 'CLUBS_FETCH_MANY_REQUEST',
  CLUBS_FETCH_MANY_SUCCESS: 'CLUBS_FETCH_MANY_SUCCESS',
  CLUBS_FETCH_MANY_ERROR: 'CLUBS_FETCH_MANY_ERROR',
  CLUBS_FETCH_ONE_REQUEST: 'CLUBS_FETCH_ONE_REQUEST',
  CLUBS_FETCH_ONE_SUCCESS: 'CLUBS_FETCH_ONE_SUCCESS',
  CLUBS_FETCH_ONE_ERROR: 'CLUBS_FETCH_ONE_ERROR',
};

export class ClubsActions {

  constructor(
    private state: Club[],
    private action: any,
  ) {}

  public clubsSuccess() {

    const returnedIds = this.action.clubs.map(c => c.id);

    const clubs: Club[] = [
      ...this.action.clubs,
      ...this.state.filter(c => returnedIds.indexOf(c.id) < 0),
    ].sort((a, b) => a.name.localeCompare(b.name));

    return clubs;
  }
}
