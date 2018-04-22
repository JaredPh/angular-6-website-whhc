import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './app.store';
import { AppService } from './app.service';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @select(s => s.counter.counter) counter: number;
  @select(s => s.counter.status) status: string;
  @select(s => s.counter.lastUpdated) updated: number;
  @select(s => s.date.date) xxx: number;

  constructor(
    private redux: NgRedux<IAppState>,
    private appService: AppService,
  ) {}

  public more() {
    this.appService.increment();
  }

  public less() {
    this.appService.decrement();
  }

  public addDay() {
    this.appService.addDay();
  }

  public addWeek() {
    this.appService.addWeek();
  }

  public addMonth() {
    this.appService.addMonth();
  }
}
