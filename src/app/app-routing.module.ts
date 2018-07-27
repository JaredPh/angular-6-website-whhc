import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloader } from './app.preloader';

const routes: Routes = [
  { path: 'login', loadChildren: './routes/auth/auth.module#AuthViewModule' },
  { path: 'reset-password', loadChildren: './routes/auth/auth.module#AuthViewModule' },
  { path: 'events', loadChildren: './routes/events/events.module#EventsViewModule' },
  { path: 'fixtures', loadChildren: './routes/fixtures/fixtures.module#FixturesViewModule' },
  { path: 'results', loadChildren: './routes/fixtures/fixtures.module#FixturesViewModule' },
  { path: 'members', loadChildren: './routes/members/members.module#MembersViewModule' },
  { path: 'news', loadChildren: './routes/news/news.module#NewsViewModule' },
  { path: 'photos', loadChildren: './routes/photos/photos.module#PhotosViewModule' },
  { path: 'error', loadChildren: './routes/error/error.module#ErrorViewModule' },
  { path: '', loadChildren: './routes/home/home.module#HomeViewModule' },
  { path: '', loadChildren: './routes/pages/pages.module#PagesViewModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppPreloader })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
