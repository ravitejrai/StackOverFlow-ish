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
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PortfoliolayoutComponent, PortfoliohomeComponent, StockportfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MatTableModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    FlexLayoutModule
    
  ]
})
export class PortfolioModule { }
