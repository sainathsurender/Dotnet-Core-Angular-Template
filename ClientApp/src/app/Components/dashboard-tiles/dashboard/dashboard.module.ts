import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHolderComponent } from './dashboard-holder/dashboard-holder.component';
import { DashboardCardsComponent } from './dashboard-cards/dashboard-cards.component';
import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';

@NgModule({
  declarations: [DashboardHolderComponent, DashboardCardsComponent, DashboardGraphComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
