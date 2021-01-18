import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseDetailsComponent } from './case-details/case-details.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard-details/:id', component: CaseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
