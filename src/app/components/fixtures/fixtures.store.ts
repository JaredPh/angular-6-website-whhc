import { Fixture } from './fixtures.models';
import { fixturesActions, FixturesReducerActions } from './fixtures.actions';

export const INITIAL_FIXTURES_STATE: Fixture[] = [];

export function fixturesReducer(state: Fixture[] = INITIAL_FIXTURES_STATE, action): Fixture[] {

  const actions = new FixturesReducerActions(state, action);

  switch (action.type) {

    case fixturesActions.FIXTURES_FETCH_MANY_SUCCESS:
      return actions.fixturesSuccess();

  }

  return state;
}
