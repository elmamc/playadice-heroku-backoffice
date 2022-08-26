import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
