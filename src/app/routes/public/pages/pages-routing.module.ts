import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PagesGuard } from './pages.guard';

const routes: Routes = [
  {
    path: ':slug',
    component: PagesComponent,
    canActivate: [PagesGuard],
    data: { reuse: false },
  },
  {
    path: ':parent/:slug',
    component: PagesComponent,
    canActivate: [PagesGuard],
    data: { reuse: false },
  },
  {
    path: ':grandparent/:parent/:slug',
    component: PagesComponent,
    canActivate: [PagesGuard],
    data: { reuse: false },
  },
  {
    path: '**',
    redirectTo: '/error/404',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
