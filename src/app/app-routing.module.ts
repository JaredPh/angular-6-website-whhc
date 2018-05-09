import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloader } from './app.preloader';

const routes: Routes = [
  { path: '', loadChildren: './routes/home/home.module#HomeViewModule' },
  { path: 'news', loadChildren: './routes/news/news.module#NewsViewModule' },
  { path: 'error', loadChildren: './routes/error/error.module#ErrorViewModule' },
  { path: '**', redirectTo: '/error/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppPreloader })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
