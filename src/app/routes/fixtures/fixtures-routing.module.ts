import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixturesComponent } from './fixtures.component';
import { FixturesGuard } from './fixtures.guard';

const routes: Routes = [
  {
    path: '',
    component: FixturesComponent,
    canActivate: [FixturesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixturesViewRoutingModule { }
