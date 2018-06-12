import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPreloader } from './app.preloader';
import { AppRouteStrategy } from './app.route-strategy';

import { NgReduxRouterModule } from '@angular-redux/router';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { IAppState, INITIAL_STATE, rootReducer } from './app.store';
import { SharedModule } from './components/shared/shared.module';
import { PageLoaderService } from './components/shared/elements/page-loader/page-loader.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    NgReduxRouterModule,
    SharedModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AppPreloader,
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: AppRouteStrategy,
    // },
    PageLoaderService,
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
