import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppState } from '../../app.store';
import { HttpService } from '../shared/services/http.service';
import { tagsActions } from './tags.actions';

@Injectable()
export class TagsService {

  constructor(
    private redux: NgRedux<IAppState>,
    private httpService: HttpService,
  ) {}

  public loadTags(): void {
    this.redux.select(s => s.tags).subscribe((stateTags) => {
      if (stateTags.length === 0) {
        this.redux.dispatch({type: tagsActions.TAGS_FETCH_MANY_REQUEST});

        const httpResponse = this.httpService.get('/tags');

        httpResponse.subscribe(
          (data: any) => {
            const tags = data.results.map(t => t.name);
            this.redux.dispatch({type: tagsActions.TAGS_FETCH_MANY_SUCCESS, tags});
          },
          (error) => {
            this.redux.dispatch({type: tagsActions.TAGS_FETCH_MANY_ERROR, status: error.status});
          },
        );
      }
    });
  }
}
