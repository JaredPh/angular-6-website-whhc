import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPreloader } from './app.preloader';

const routes: Routes = [
  { path: 'members', loadChildren: './routes/private/members/members.module#MembersViewModule' },
  { path: 'login', loadChildren: './routes/public/auth/auth.module#AuthViewModule' },
  { path: 'reset-password', loadChildren: './routes/public/auth/auth.module#AuthViewModule' },
  { path: 'events', loadChildren: './routes/public/events/events.module#EventsViewModule' },
  { path: 'fixtures', loadChildren: './routes/public/fixtures/fixtures.module#FixturesViewModule' },
  { path: 'results', loadChildren: './routes/public/fixtures/fixtures.module#FixturesViewModule' },
  { path: 'news', loadChildren: './routes/public/news/news.module#NewsViewModule' },
  { path: 'photos', loadChildren: './routes/public/photos/photos.module#PhotosViewModule' },
  { path: 'error', loadChildren: './routes/public/error/error.module#ErrorViewModule' },
  { path: '', loadChildren: './routes/public/home/home.module#HomeViewModule' },
  { path: '', loadChildren: './routes/public/pages/pages.module#PagesViewModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppPreloader })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
