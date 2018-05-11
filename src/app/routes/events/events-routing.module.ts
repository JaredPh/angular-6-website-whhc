import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'tags/:tag', component: EventsComponent, data: { reuse: true }},
  { path: 'tags/:tag/:slug', component: EventsComponent, data: { reuse: true }},
  { path: 'tags', redirectTo: '' },
  { path: ':slug', component: EventsComponent, data: { reuse: true }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsViewRoutingModule { }
