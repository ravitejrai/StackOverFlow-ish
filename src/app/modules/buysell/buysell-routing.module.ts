import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchstockComponent } from './container/searchstock/searchstock.component';
import { SearchInfoComponent } from './container/search-info/search-info.component';



const routes: Routes = [
  {
    path: '', component: SearchstockComponent
  },
  {
    path: 'home/:name/info', component: SearchInfoComponent
  },
  {
    path: 'home/buy/id', component: SearchInfoComponent
  },
  {
    path: 'home/sell/id', component: SearchInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuysellRoutingModule { }
