import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { EventsModule } from '../../../components/events/events.module';
import { NewsModule } from '../../../components/news/news.module';
import { SharedModule } from '../../../components/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeEventsComponent } from './home-events/home-events.component';
import { HomeNewsFeaturedCardComponent } from './home-news/home-news-featured-card/home-news-featured-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    EventsModule,
    NewsModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    HomeNewsComponent,
    HomeEventsComponent,
    HomeNewsFeaturedCardComponent,
  ],
})
export class HomeViewModule { }
