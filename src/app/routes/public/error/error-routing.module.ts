import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error.component';

const routes: Routes = [
  { path: '', redirectTo: '404', pathMatch: 'full' },
  { path: '401', component: ErrorComponent, data: { errorCode: '401' }},
  { path: '403', component: ErrorComponent, data: { errorCode: '403' }},
  { path: '404', component: ErrorComponent, data: { errorCode: '404' }},
  { path: '500', component: ErrorComponent, data: { errorCode: '500' }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
