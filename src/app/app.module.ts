import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPreloader } from './app.preloader';
import { AppRouteStrategy } from './app.route-strategy';

import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, INITIAL_STATE, rootReducer } from './app.store';
import { SharedModule } from './components/shared/shared.module';
import { PageLoaderModule } from './components/page-loader/page-loader.module';
import {PageLoaderService} from "./components/page-loader/page-loader.service";
import {PageLoaderComponent} from "./components/page-loader/page-loader.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    SharedModule,
    PageLoaderModule,
  ],
  providers: [
    AppPreloader,
    {
      provide: RouteReuseStrategy,
      useClass: AppRouteStrategy,
    },
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
