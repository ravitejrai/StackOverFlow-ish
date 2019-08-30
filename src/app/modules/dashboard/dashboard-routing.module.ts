import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardlayoutComponent } from './container/dashboardlayout/dashboardlayout.component';
import { HomeComponent } from './container/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardlayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('../portfolio/portfolio.module').then(
            m => m.PortfolioModule
          )
      },
      {
        path: 'buysell',
        loadChildren: () =>
          import('../buysell/buysell.module').then(
            m => m.BuysellModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
