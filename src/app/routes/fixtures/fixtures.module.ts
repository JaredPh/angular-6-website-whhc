import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixturesModule } from '../../components/fixtures/fixtures.module';

import { SharedModule } from '../../components/shared/shared.module';
import { FixturesCardComponent } from './fixtures-card/fixtures-card.component';
import { FixturesViewRoutingModule } from './fixtures-routing.module';

import { FixturesComponent } from './fixtures.component';
import { FixturesGuard } from './fixtures.guard';
import { FixturesDayComponent } from './fixtures-day/fixtures-day.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FixturesModule,
    FixturesViewRoutingModule,
  ],
  providers: [
    FixturesGuard,
  ],
  declarations: [
    FixturesComponent,
    FixturesCardComponent,
    FixturesDayComponent,
  ],
})
export class FixturesViewModule { }
