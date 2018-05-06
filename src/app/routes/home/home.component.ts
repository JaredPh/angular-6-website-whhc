import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { select } from 'ng2-redux';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @select(s => s.news.pendingRequests + s.events.pendingRequests  > 0) loading: Observable<boolean>;

  constructor(
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.initPageLoader();
  }

  private initPageLoader() {
    const message = 'Loading...';

    this.pageLoader.set(message);

    this.loading.subscribe((isLoading) => {
      if (isLoading) {
        this.pageLoader.set(message);
      } else {
        this.pageLoader.clear();
      }
    });
  }
}
