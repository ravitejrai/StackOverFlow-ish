import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchstockComponent } from './container/searchstock/searchstock.component';
import { BuyStockComponent } from './container/buy-stock/buy-stock.component';
import { SearchInfoComponent } from './container/search-info/search-info.component';




const routes: Routes = [
  {
    path: '', component: SearchstockComponent
  },
  {
    path: 'home/:name/info', component: SearchInfoComponent
  },
  {
    path: 'home/buy/id', component: BuyStockComponent
  },
  {
    path: 'home/sell/id', component: BuyStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuysellRoutingModule { }
