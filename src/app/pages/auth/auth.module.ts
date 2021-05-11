import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from 'src/app/layout/layout.module';
import { AuthComponent } from './auth.component';
import { authRoutes } from './auth.routes';
import {  LoginFormMudule } from './components/login-form/login-form.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [AuthComponent,LoginComponent, ForgotComponent,  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    LayoutModule,
    // FormsModule,
    // ReactiveFormsModule,
    LoginFormMudule
    

  ],
  providers: [],
  //   bootstrap: [AppComponent],
})
export class AuthModule {}
