import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthResetComponent } from './auth-reset/auth-reset.component';
import { SharedModule } from '../../../components/shared/shared.module';
import { AuthModule } from '../../../components/auth/auth.module';
import { UnAuthGuard } from './unauthenticated.guard';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    AuthModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthLoginComponent,
    AuthResetComponent,
  ],
  providers: [
    UnAuthGuard,
  ]
})
export class AuthViewModule { }
