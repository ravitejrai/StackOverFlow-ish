import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfoliolayoutComponent } from './container/portfoliolayout/portfoliolayout.component';
import { PortfoliohomeComponent } from './container/portfoliohome/portfoliohome.component';


export const routes: Routes = [
  {
    path: '',
    component: PortfoliolayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: PortfoliohomeComponent,

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
