import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { HttpService } from '../shared/services/http.service';
import { authActions } from '../auth/auth.actions';
import { NgRedux } from '@angular-redux/store';

@Injectable()
export class MembersService {

  constructor(
    private httpService: HttpService,
    private redux: NgRedux<IAppState>,
  ) {}

  getCurrent() {
    const httpResponse = this.httpService.get('/members/current');

    this.redux.dispatch({ type: authActions.AUTH_FETCH_CURRENT_USER_REQUEST });

    httpResponse.subscribe(
      (data: any) => {
        this.redux.dispatch({ type: authActions.AUTH_FETCH_CURRENT_USER_SUCCESS, user: data.results[0] });
      },
      (error) => {
        this.redux.dispatch({ type: authActions.AUTH_FETCH_CURRENT_USER_ERROR, status: error.status });
      },
    );
  }
}
