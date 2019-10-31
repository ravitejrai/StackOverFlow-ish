import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './container/layout/layout.component';
import { RegistrationComponent } from './container/registration/registration.component';
import { LoginComponent } from './container/login/login.component';
import { HomeComponent } from './container/home/home.component';
import { QuestionInfoComponent } from '../dashboard/container/question-info/question-info.component';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,

      },
      {
        path: 'registration',
        component: RegistrationComponent,

      },
      {
        path: 'login',
        component: LoginComponent,

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
