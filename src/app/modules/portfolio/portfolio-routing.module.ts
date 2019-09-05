import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfoliolayoutComponent } from './container/portfoliolayout/portfoliolayout.component';
import { PortfoliohomeComponent } from './container/portfoliohome/portfoliohome.component';
import { StockportfolioComponent } from './container/stockportfolio/stockportfolio.component';


export const routes: Routes = [
  {
    path: '',
    component: PortfoliolayoutComponent,
    children: [
      { path: '', redirectTo: 'userportfolio', pathMatch: 'full' },
      {
        path:'userportfolio',
        component: PortfoliohomeComponent
      },
      {
        path: 'stockList',
        component: StockportfolioComponent,
      }
      // {
      //   path: 'login',
      //   component: LoginComponent,

      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
