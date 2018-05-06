import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from './components/page-loader/page-loader.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private pageLoader: PageLoaderService) {
  }

  ngOnInit() {
    // this.pageLoader.set('Loading the page');
  }
}
