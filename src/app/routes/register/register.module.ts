import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../../components/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { RegisterService } from './register.service';
import { RegisterCompleteComponent } from './register-complete/register-complete.component';
import { RegisterReturnComponent } from './register-return/register-return.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    ScrollToModule,
  ],
  providers: [
    RegisterService,
  ],
  declarations: [
    RegisterComponent,
    RegisterCompleteComponent,
    RegisterReturnComponent,
  ],
})
export class RegisterViewModule { }
