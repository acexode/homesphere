import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { UnauthorizedPage } from './unauthorized/unauthorized.page';

@NgModule({
  declarations: [LoginPage, RegisterPage, ForgotPasswordPage, UnauthorizedPage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, AuthRoutingModule],
})
export class AuthModule {}
