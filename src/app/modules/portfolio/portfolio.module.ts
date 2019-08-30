import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfoliolayoutComponent } from './container/portfoliolayout/portfoliolayout.component';
import { PortfoliohomeComponent } from './container/portfoliohome/portfoliohome.component';


@NgModule({
  declarations: [PortfoliolayoutComponent, PortfoliohomeComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
