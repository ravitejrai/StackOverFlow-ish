import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGaurdService } from './route-gaurd.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/landing/landing.module').then(
        m => m.LandingModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ), canActivate:[RouteGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
