import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsArticleGuard } from './news-article/news-article.guard';
import { NewsGuard } from './news.guard';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    canActivate: [NewsGuard],
  },
  {
    path: 'tags/:tag',
    component: NewsComponent,
    canActivate: [NewsGuard],
    data: { reuse: false },
  },
  {
    path: 'tags',
    redirectTo: '',
  },
  {
    path: ':slug',
    component: NewsArticleComponent,
    canActivate: [NewsArticleGuard],
    data: { reuse: false },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
