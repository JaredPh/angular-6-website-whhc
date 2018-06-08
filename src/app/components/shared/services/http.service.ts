import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {}

  get(route: string, options?: any) {

    let queryString = '';

    if (options && Object.keys(options).length > 0) {
      queryString = Object.keys(options).reduce((str, key) => `${str}&${key}=${options[key].toString()}`, '');
      queryString = `?${queryString.substr(1)}`;
    }

    const url = `${environment.apiAddress}${route}${queryString}`;

    if (isDevMode()) {
      console.log('HttpService', 'GET:', url);
    }

    return this.http.get(url);
  }
}
