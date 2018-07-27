import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members.component';
import { AuthGuard } from '../../../components/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: 'fixtures', loadChildren: './fixtures/fixtures.module#FixturesAdminRoutingModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }