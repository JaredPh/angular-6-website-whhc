import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailGuard } from './event-detail/event-detail.guard';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventsGuard } from './events.guard';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    canActivate: [EventsGuard],
  },
  {
    path: 'tags/:tag',
    component: EventsComponent,
    canActivate: [EventsGuard],
    data: { reuse: false },
  },
  {
    path: 'tags',
    redirectTo: '',
  },
  {
    path: ':slug',
    component: EventDetailComponent,
    canActivate: [EventDetailGuard],
    data: { reuse: false },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsViewRoutingModule { }
