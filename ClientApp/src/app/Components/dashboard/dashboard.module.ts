import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardTilesComponent } from './dashboard-tiles/dashboard-tiles.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [DashboardComponent, DashboardTilesComponent, CaseDetailsComponent, FileUploadComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
