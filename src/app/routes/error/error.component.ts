import { Component, OnInit } from '@angular/core';
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
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { errorCode: string}) => {
        this.pageLoader.clear();
      });
  }

}
