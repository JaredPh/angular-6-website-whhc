import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersService } from './members.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MembersService,
  ],
  declarations: []
})
export class MembersModule { }
