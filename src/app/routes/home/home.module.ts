import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeEventCardComponent } from './home-events/home-event/home-event-card.component';
import { EventsModule } from '../../components/events/events.module';
import { NewsModule } from '../../components/news/news.module';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeEventsComponent } from './home-events/home-events.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    EventsModule,
    NewsModule,
  ],
  declarations: [
    HomeComponent,
    HomeEventCardComponent,
    HomeNewsComponent,
    HomeEventsComponent,
  ],
})
export class HomeViewModule { }
