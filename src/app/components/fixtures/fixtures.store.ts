import { Fixture } from './fixtures.models';
import { fixturesActions, FixturesActions } from './fixtures.actions';

export const INITIAL_FIXTURES_STATE: Fixture[] = [];

export function fixturesReducer(state: Fixture[] = INITIAL_FIXTURES_STATE, action): Fixture[] {

  const actions = new FixturesActions(state, action);

  switch (action.type) {

    case fixturesActions.FIXTURES_FETCH_MANY_SUCCESS:
      return actions.fixturesSuccess();

  }

  return state;
}
