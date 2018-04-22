import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, INITIAL_STATE, rootReducer } from './app.store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {

  constructor(
    redux: NgRedux<IAppState | any>, // TODO: update redux and remove any
    devTools: DevToolsExtension,
  ) {
    const middleware = [];
    const enhancers = [];

    if (isDevMode()) {
      enhancers.push(devTools.enhancer());
    }

    redux.configureStore(rootReducer, INITIAL_STATE, middleware, enhancers);
  }

}
