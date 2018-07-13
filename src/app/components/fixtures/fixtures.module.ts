import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { FixturesService } from './fixtures.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    // RouterModule,
    // SharedModule,
  ],
  providers: [
    FixturesService,
  ],
  exports: [
  ],
})
export class FixturesModule {}


