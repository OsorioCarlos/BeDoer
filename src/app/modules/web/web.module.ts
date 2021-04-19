import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { WebRoutingModule } from './web-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    ReactiveFormsModule
  ]
})
export class WebModule { }
