import { tassign } from 'tassign';
import { Member } from '../members/members.models';

export const authActions = {
  AUTH_FETCH_CURRENT_USER_REQUEST: 'AUTH_FETCH_CURRENT_USER_REQUEST',
  AUTH_FETCH_CURRENT_USER_SUCCESS: 'AUTH_FETCH_CURRENT_USER_SUCCESS',
  AUTH_FETCH_CURRENT_USER_ERROR: 'AUTH_FETCH_CURRENT_USER_ERROR',
  AUTH_SET_SESSION: 'AUTH_SET_SESSION',
};

export class AuthActions {

  constructor(
    private state: any,
    private action: any,
  ) {}

  setUser() {
    return tassign(this.state, {
      user: new Member(this.action.user),
    });
  }

  setSession() {
    const session = this.action.accessToken;

    return tassign(this.state, {
      username: session.payload.username,
      iat: session.payload.auth_time,
      exp: session.payload.exp,
      token: session.jwtToken,
    });
  }
}
