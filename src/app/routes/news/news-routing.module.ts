import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsArticleComponent } from './news-article/news-article.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'tags', redirectTo: '' },
  { path: 'tags/:tag', component: NewsComponent, data: { reuse: true }},
  { path: ':slug', component: NewsArticleComponent, data: { reuse: false }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }