import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfoliolayoutComponent } from './container/portfoliolayout/portfoliolayout.component';
import { PortfoliohomeComponent } from './container/portfoliohome/portfoliohome.component';
import { StockportfolioComponent } from './container/stockportfolio/stockportfolio.component';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [PortfoliolayoutComponent, PortfoliohomeComponent, StockportfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class PortfolioModule { }
