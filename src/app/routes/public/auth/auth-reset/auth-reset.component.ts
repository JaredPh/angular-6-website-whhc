import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../../../components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-auth-reset',
  templateUrl: './auth-reset.component.html',
  styleUrls: ['./auth-reset.component.scss']
})
export class AuthResetComponent implements OnInit {

  constructor(
    private pageLoader: PageLoaderService,
  ) { }

  ngOnInit() {
    this.pageLoader.clear();
  }

}
