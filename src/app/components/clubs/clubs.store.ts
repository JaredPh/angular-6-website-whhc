import { clubsActions, ClubsActions } from './clubs.actions';
import { Club } from '../shared/models/clubs.models';

export const INITIAL_CLUBS_STATE: Club[] = [];

export function clubsReducer(state: Club[] = INITIAL_CLUBS_STATE, action): Club[] {

  const actions = new ClubsActions(state, action);

  switch (action.type) {

    case clubsActions.CLUBS_FETCH_ONE_SUCCESS:
    case clubsActions.CLUBS_FETCH_MANY_SUCCESS:
      return actions.clubsSuccess();

  }

  return state;
}
