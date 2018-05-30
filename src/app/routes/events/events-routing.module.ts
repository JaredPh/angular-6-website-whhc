import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'items/:tag', component: EventsComponent, data: { reuse: true }},
  { path: 'tags', redirectTo: '' },
  { path: ':slug', component: EventDetailComponent, data: { reuse: true }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsViewRoutingModule { }
