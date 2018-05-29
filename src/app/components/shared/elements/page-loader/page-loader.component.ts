import { Component, OnInit } from '@angular/core';
import {PageLoaderService} from './page-loader.service';

@Component({
  selector: 'whhc-page-loader',
  templateUrl: './page-loader.component.html',
})
export class PageLoaderComponent implements OnInit {

  public value: string;

  constructor(
    private pageLoaderService: PageLoaderService) {
  }

  ngOnInit() {
    this.pageLoaderService.emitter.subscribe(value => this.value = value);
  }
}
