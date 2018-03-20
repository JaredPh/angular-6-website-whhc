import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppStore, rootReducer } from './app.store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<IAppStore>,
  ) {
    ngRedux.configureStore(rootReducer, {});
  }

}
