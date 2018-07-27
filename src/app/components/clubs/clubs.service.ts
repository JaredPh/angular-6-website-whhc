import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { NgRedux } from '@angular-redux/store';
import { HttpService } from '../shared/services/http.service';
import { clubsActions } from './clubs.actions';
import { Club } from '../shared/models/clubs.models';

@Injectable()
export class ClubsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  // public async loadClub(id: number): Promise<void> {
  //   const idPromise: Promise<number> = new Promise((resolve) => {
  //     this.redux.select(s => s.clubs.findIndex(c => c.id === id))
  //       .subscribe(s => resolve(s));
  //   });
  //
  //   const existsInState = ((await idPromise) >= 0);
  //
  //   if (await existsInState === false) {
  //     this.redux.dispatch({type: clubsActions.CLUBS_FETCH_ONE_REQUEST });
  //     const httpResponse = this.httpService.get(`/clubs/${id}`);
  //
  //     httpResponse.subscribe(
  //       (data: any) => {
  //         const clubs: Club[] = data.results.map(c => new Club(c));
  //
  //         this.redux.dispatch({type: clubsActions.CLUBS_FETCH_ONE_SUCCESS, clubs});
  //       },
  //       (error) => {
  //         this.redux.dispatch({type: clubsActions.CLUBS_FETCH_ONE_ERROR, status: error.status});
  //       },
  //     );
  //   }
  // }

  public loadClubs(): void {
    this.redux.dispatch({type: clubsActions.CLUBS_FETCH_MANY_REQUEST});

    const httpResponse = this.httpService.get('/clubs');

    httpResponse.subscribe(
      (data: any) => {
        const clubs: Club[] = data.results.map(c => new Club(c));

        this.redux.dispatch({type: clubsActions.CLUBS_FETCH_MANY_SUCCESS, clubs});
      },
      (error) => {
        this.redux.dispatch({type: clubsActions.CLUBS_FETCH_MANY_ERROR, status: error.status});
      },
    );
  }
}
