import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './app.store';

@Component({
  selector: 'whhc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @select() counter: number;

  constructor(
    private redux: NgRedux<IAppState>,
  ) {}

  public more() {
    this.redux.dispatch({ type: 'MORE' });
  }

  public less() {
    this.redux.dispatch({ type: 'LESS' });
  }
}
