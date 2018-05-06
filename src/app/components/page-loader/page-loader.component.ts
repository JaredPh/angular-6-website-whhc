import { Component, Input, OnInit } from '@angular/core';
import {PageLoaderService} from './page-loader.service';

@Component({
  selector: 'whhc-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  public value: string;

  constructor(
    private pageLoaderService: PageLoaderService) {
  }

  ngOnInit() {
    this.pageLoaderService.getObservable().subscribe((value) => {
      console.log('serv update', value);
      this.value = value;
    });
  }
}
