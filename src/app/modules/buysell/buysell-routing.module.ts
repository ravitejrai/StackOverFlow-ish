import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchstockComponent } from './container/searchstock/searchstock.component';



const routes: Routes = [

  {
    path: '',
    component: SearchstockComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: SearchstockComponent,

      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuysellRoutingModule { }
