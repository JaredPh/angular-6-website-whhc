import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthResetComponent } from './auth-reset/auth-reset.component';
import { SharedModule } from '../../components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
  ],
  declarations: [
    AuthLoginComponent,
    AuthResetComponent,
  ],
})
export class AuthModule { }
