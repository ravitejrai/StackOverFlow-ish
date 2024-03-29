import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LandingRoutingModule } from './landing-routing.module';
import { LayoutComponent } from './container/layout/layout.component';
import { RegistrationComponent } from './container/registration/registration.component';
import { LoginComponent } from './container/login/login.component';
import { HomeComponent } from './container/home/home.component';
import { MyMaterialModule } from 'src/app/material.module';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [LayoutComponent, RegistrationComponent, LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDatepickerModule
  ]
})
export class LandingModule { }
