import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../../app.store';

@Injectable()
export class HttpService {

  private token: string;

  constructor(
    private redux: NgRedux<IAppState>,
    private http: HttpClient,
  ) {
    this.redux.select(s => s.auth.token).subscribe(token => this.token = token);
  }

  get(route: string, params: any = {}) {
    const url = `${environment.apiAddress}${route}`;

    const options = {
      params,
      headers: {
        Authorization: null,
      },
    };

    if (this.token) {
      options.headers.Authorization = `Bearer ${this.token}`;
    }

    return this.http.get(url, options);
  }
}
