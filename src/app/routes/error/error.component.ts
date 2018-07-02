import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../app.store';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'whhc-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {

  constructor(
    private pageLoader: PageLoaderService,
    private route: ActivatedRoute,
    private redux: NgRedux<IAppState>,
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { errorCode: string}) => {
        this.pageLoader.clear();
      });

    this.redux.dispatch({ type: 'RESET_ERROR'});
  }

}
