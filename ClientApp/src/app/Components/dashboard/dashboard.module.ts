import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardTilesComponent } from './dashboard-tiles/dashboard-tiles.component';
import { CaseDetailsComponent } from './case-details/case-details.component';


@NgModule({
  declarations: [DashboardComponent, DashboardTilesComponent, CaseDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
