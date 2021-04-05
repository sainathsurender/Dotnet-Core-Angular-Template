import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardTilesComponent } from './dashboard-tiles/dashboard-tiles.component';
import { CaseDetailsComponent } from './case-details/case-details.component';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DashboardComponent, DashboardTilesComponent, CaseDetailsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class DashboardModule { }
