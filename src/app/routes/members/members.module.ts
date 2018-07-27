import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { AuthModule } from '../../components/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule,
    AuthModule,
  ],
  declarations: [
    MembersComponent
  ],
})
export class MembersViewModule { }
