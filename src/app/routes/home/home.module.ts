import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeEventComponent } from './home-event/home-event.component';
import { EventsModule } from '../../components/events/events.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    EventsModule,
  ],
  declarations: [
    HomeComponent,
    HomeEventComponent,
  ],
})
export class HomeModule { }
