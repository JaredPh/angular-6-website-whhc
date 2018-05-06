import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from './components/shared/elements/page-loader/page-loader.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // this.pageLoader.set('Loading the page');
  }
}
