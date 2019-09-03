import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LayoutComponent } from './container/layout/layout.component';
import { RegistrationComponent } from './container/registration/registration.component';
import { LoginComponent } from './container/login/login.component';
import { HomeComponent } from './container/home/home.component';

import { MyMaterialModule } from 'src/app/material.module';

import { LearnrxjsComponent } from './container/learnrxjs/learnrxjs.component';



@NgModule({
  declarations: [LayoutComponent, RegistrationComponent, LoginComponent, HomeComponent, LearnrxjsComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MyMaterialModule
  ]
})
export class LandingModule { }
