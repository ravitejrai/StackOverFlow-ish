import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './container/home/home.component';
import { DashboardlayoutComponent } from './container/dashboardlayout/dashboardlayout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material';
import { QuestionInfoComponent } from './container/question-info/question-info.component';
import { AskquestionsComponent } from './container/askquestions/askquestions.component';


@NgModule({
  declarations: [ HomeComponent, DashboardlayoutComponent, QuestionInfoComponent, AskquestionsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  ]
})
export class DashboardModule { }
