import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterCompleteComponent } from './register-complete/register-complete.component';
import { RegisterReturnComponent } from './register-return/register-return.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  },
  {
    path: 'complete',
    component: RegisterCompleteComponent,
  },
  {
    path: 'return',
    component: RegisterReturnComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
