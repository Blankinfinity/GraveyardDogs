import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AccountRoutes } from './account.routes';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../layout/shared.module';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [RegistrationFormComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AccountRoutes
  ],
  providers: [UserService]
})
export class AccountModule { }
