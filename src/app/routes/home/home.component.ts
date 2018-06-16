import { Component } from '@angular/core';
import { PageLoaderService } from '../../components/shared/elements/page-loader/page-loader.service';
import { Observable } from 'rxjs/index';
import { select } from '@angular-redux/store';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @select(s => s.requests.pending  > 0) loading: Observable<boolean>;

  constructor(
    private pageLoader: PageLoaderService,
  ) {
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
