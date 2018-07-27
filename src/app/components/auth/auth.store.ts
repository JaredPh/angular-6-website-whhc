import { AuthActions, authActions } from './auth.actions';
import { Member } from '../members/members.models';

export interface IAuthState {
  user: Member;
  username: string;
  iat: number;
  exp: number;
  token: string;
}

export const INITIAL_AUTH_STATE: IAuthState = {
  user: null,
  username: null,
  iat: null,
  exp: null,
  token: null,
};

export function authReducer(state: IAuthState = INITIAL_AUTH_STATE, action): IAuthState {

  const actions = new AuthActions(state, action);

  switch (action.type) {
    case authActions.AUTH_SET_SESSION: return actions.setSession();
    case authActions.AUTH_FETCH_CURRENT_USER_SUCCESS: return actions.setUser();
  }

  return state;
}
