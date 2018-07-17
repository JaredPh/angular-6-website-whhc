import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-auth-login',
  templateUrl: './auth-login.component.html',
})
export class AuthLoginComponent implements OnInit {

  constructor(
    private pageLoader: PageLoaderService,
  ) {}

  ngOnInit() {
    this.pageLoader.clear();
  }

}
