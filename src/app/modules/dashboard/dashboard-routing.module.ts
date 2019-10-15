import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardlayoutComponent } from './container/dashboardlayout/dashboardlayout.component';
import { HomeComponent } from './container/home/home.component';
import { QuestionInfoComponent } from './container/question-info/question-info.component';
import { AskquestionsComponent } from './container/askquestions/askquestions.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardlayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'dashboard/home/AskQuestions/dashboard', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'home/:id/info',
        component: QuestionInfoComponent
      },
      {
        path: 'home/:id/info/AskQuestions',
        component: AskquestionsComponent
      },
      {
        path: 'home/AskQuestions',
        component: AskquestionsComponent
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('../portfolio/portfolio.module').then(
            m => m.PortfolioModule
          )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
